<?php
/**
 * BlueWave Pools — Order Email Handler
 * Receives POST data from the order form and sends email to the merchant.
 *
 * Configuration: Update $config array below before deploying.
 */

// ── CORS & Headers ───────────────────────────────────────
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// ── Only accept POST ─────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ══════════════════════════════════════════════════════════
// CONFIGURATION (loaded from config.php — not in git)
// ══════════════════════════════════════════════════════════
$config = file_exists(__DIR__ . '/config.php')
    ? require __DIR__ . '/config.php'
    : [];

// ── SMTP sender (Gmail, no external library needed) ───────
function bluewave_smtp($cfg, $subject, $html, $text) {
    $conn = @fsockopen($cfg['smtp_host'], $cfg['smtp_port'], $errno, $errstr, 15);
    if (!$conn) return false;

    $get = function() use ($conn) {
        $r = '';
        while ($l = fgets($conn, 515)) { $r .= $l; if ($l[3] === ' ') break; }
        return $r;
    };
    $put = function($s) use ($conn) { fputs($conn, $s . "\r\n"); };

    $get();
    $put("EHLO localhost"); $get();
    $put("STARTTLS");       $get();

    stream_socket_enable_crypto($conn, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);

    $put("EHLO localhost");           $get();
    $put("AUTH LOGIN");               $get();
    $put(base64_encode($cfg['smtp_user'])); $get();
    $put(base64_encode($cfg['smtp_pass']));
    $auth = $get();
    if (strpos($auth, '235') === false) { fclose($conn); return false; }

    $put("MAIL FROM:<{$cfg['smtp_user']}>"); $get();
    $put("RCPT TO:<{$cfg['to']}>");          $get();
    $put("DATA");                            $get();

    $b   = md5(uniqid());
    $sub = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $msg  = "From: {$cfg['from_name']} <{$cfg['smtp_user']}>\r\n";
    $msg .= "To: {$cfg['to']}\r\n";
    $msg .= "Subject: {$sub}\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: multipart/alternative; boundary=\"{$b}\"\r\n\r\n";
    $msg .= "--{$b}\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n{$text}\r\n\r\n";
    $msg .= "--{$b}\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n{$html}\r\n\r\n";
    $msg .= "--{$b}--\r\n.";
    $put($msg); $get();
    $put("QUIT");
    fclose($conn);
    return true;
}

// ── Sanitize & Validate Input ────────────────────────────
function sanitize($val) {
    return htmlspecialchars(strip_tags(trim($val ?? '')), ENT_QUOTES, 'UTF-8');
}

$nom            = sanitize($_POST['nom']            ?? '');
$prenom         = sanitize($_POST['prenom']         ?? '');
$telephone      = sanitize($_POST['telephone']      ?? '');
$wilaya         = sanitize($_POST['wilaya']          ?? '');
$commune        = sanitize($_POST['commune']         ?? '');
$notes          = sanitize($_POST['notes']           ?? '');
$delivery_label = sanitize($_POST['delivery_label'] ?? '');
$delivery_fee   = (int)($_POST['delivery_fee']      ?? 0);
$cart_subtotal  = (int)($_POST['cart_subtotal']     ?? 0);
$total_price    = (int)($_POST['total_price']       ?? 0);
$lang           = sanitize($_POST['lang']            ?? 'fr');

// Parse cart items
$cart_items = [];
$raw_cart = $_POST['cart_items'] ?? '[]';
$decoded  = json_decode($raw_cart, true);
if (is_array($decoded)) {
    foreach ($decoded as $item) {
        $cart_items[] = [
            'name'      => htmlspecialchars(strip_tags(trim($item['name']    ?? '')), ENT_QUOTES, 'UTF-8'),
            'ref'       => htmlspecialchars(strip_tags(trim($item['ref']     ?? '')), ENT_QUOTES, 'UTF-8'),
            'qty'       => (int)($item['qty']       ?? 1),
            'unitPrice' => (int)($item['unitPrice'] ?? 0),
            'subtotal'  => (int)($item['subtotal']  ?? 0),
        ];
    }
}

// Validate required fields
$errors = [];
if (empty($nom))         $errors[] = 'Nom requis';
if (empty($prenom))      $errors[] = 'Prénom requis';
if (empty($telephone))   $errors[] = 'Téléphone requis';
if (empty($wilaya))      $errors[] = 'Wilaya requise';
if (empty($commune))     $errors[] = 'Commune requise';
if (empty($cart_items))  $errors[] = 'Panier vide';

// Validate phone number (Algerian format)
$phone_clean = preg_replace('/\s+/', '', $telephone);
if (!preg_match('/^(\+213|0)[5-7][0-9]{8}$/', $phone_clean)) {
    $errors[] = 'Numéro de téléphone invalide';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// ── Pre-compute variables needed in email HTML ───────────
$date = date('d/m/Y H:i:s');

// Build cart rows HTML
$cart_rows_html = '';
foreach ($cart_items as $item) {
    $cart_rows_html .= '
                <tr style="border-top:1px solid #e8f4fd;">
                  <td style="padding:12px 16px;">
                    <p style="margin:0;font-size:14px;font-weight:700;color:#0d1f3c;">' . $item['name'] . '</p>
                    <p style="margin:2px 0 0;font-size:11px;color:#64748b;">Réf: ' . $item['ref'] . '</p>
                  </td>
                  <td style="padding:12px 16px;text-align:center;font-size:14px;font-weight:600;color:#0d1f3c;">' . $item['qty'] . '</td>
                  <td style="padding:12px 16px;text-align:right;font-size:13px;color:#64748b;">' . number_format($item['unitPrice'], 0, ',', ' ') . ' DA</td>
                  <td style="padding:12px 16px;text-align:right;font-size:14px;font-weight:700;color:#1a3a8f;">' . number_format($item['subtotal'], 0, ',', ' ') . ' DA</td>
                </tr>';
}

// Build cart plain text
$cart_text_lines = '';
foreach ($cart_items as $item) {
    $cart_text_lines .= "  - {$item['name']} (Réf: {$item['ref']}) × {$item['qty']} = {$item['subtotal']} DA\n";
}

// Format phone for WhatsApp link (strip leading 0 or +213)
if (substr($phone_clean, 0, 4) === '+213') {
    $phone_clean_for_link = substr($phone_clean, 4);
} else {
    $phone_clean_for_link = substr($phone_clean, 1);
}
$whatsapp_msg = urlencode("Bonjour {$prenom} {$nom}, votre commande BlueWave Pools a bien été reçue. Nous allons vous contacter très bientôt pour confirmer la livraison. Merci !");

// ── Build Email ───────────────────────────────────────────

$html_body = <<<HTML
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle Commande BlueWave</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:24px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d1f3c 0%,#1a3a8f 100%);padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:1px;">
                🌊 BlueWave Pools
              </h1>
              <p style="color:#90e0ef;margin:8px 0 0;font-size:14px;font-weight:600;">
                NOUVELLE COMMANDE REÇUE
              </p>
            </td>
          </tr>

          <!-- ALERT BANNER -->
          <tr>
            <td style="background:#00b4d8;padding:12px 40px;text-align:center;">
              <p style="color:#ffffff;margin:0;font-size:14px;font-weight:700;">
                🛒 Un client a passé une commande — {$date}
              </p>
            </td>
          </tr>

          <!-- PRODUCTS SECTION -->
          <tr>
            <td style="padding:32px 40px 0;">
              <h2 style="color:#1a3a8f;font-size:16px;font-weight:700;margin:0 0 16px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e8f4fd;padding-bottom:8px;">
                🛒 Produits Commandés
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f8ff;border-radius:10px;border:1px solid #caf0f8;overflow:hidden;">
                <tr style="background:#e8f4fd;">
                  <td style="padding:10px 16px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;">Produit</td>
                  <td style="padding:10px 16px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;text-align:center;">Qté</td>
                  <td style="padding:10px 16px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;text-align:right;">Prix unit.</td>
                  <td style="padding:10px 16px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;text-align:right;">Sous-total</td>
                </tr>
                {$cart_rows_html}
              </table>
            </td>
          </tr>

          <!-- CUSTOMER SECTION -->
          <tr>
            <td style="padding:24px 40px 0;">
              <h2 style="color:#1a3a8f;font-size:16px;font-weight:700;margin:0 0 16px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e8f4fd;padding-bottom:8px;">
                👤 Informations Client
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8f4fd;">
                    <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Nom Complet</span><br>
                    <span style="font-size:16px;font-weight:700;color:#0d1f3c;">{$prenom} {$nom}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8f4fd;">
                    <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">📞 Téléphone</span><br>
                    <span style="font-size:16px;font-weight:700;color:#1a3a8f;">{$telephone}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e8f4fd;">
                    <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">📍 Wilaya</span><br>
                    <span style="font-size:16px;font-weight:700;color:#0d1f3c;">{$wilaya}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">🏘️ Commune</span><br>
                    <span style="font-size:16px;font-weight:700;color:#0d1f3c;">{$commune}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

HTML;

// Notes section (only if provided)
if (!empty($notes)) {
    $html_body .= <<<HTML

          <!-- NOTES SECTION -->
          <tr>
            <td style="padding:24px 40px 0;">
              <h2 style="color:#1a3a8f;font-size:16px;font-weight:700;margin:0 0 16px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e8f4fd;padding-bottom:8px;">
                📝 Notes du Client
              </h2>
              <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:16px;">
                <p style="margin:0;color:#78350f;font-size:14px;line-height:1.7;">{$notes}</p>
              </div>
            </td>
          </tr>

HTML;
}

$html_body .= <<<HTML

          <!-- DELIVERY & TOTAL SECTION -->
          <tr>
            <td style="padding:24px 40px 0;">
              <h2 style="color:#1a3a8f;font-size:16px;font-weight:700;margin:0 0 16px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e8f4fd;padding-bottom:8px;">
                🚚 Livraison & Total
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,rgba(0,180,216,0.06),rgba(26,58,143,0.1));border:1px solid #caf0f8;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e8f4fd;">
                    <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;">Mode de livraison</span><br>
                    <span style="font-size:15px;font-weight:700;color:#0d1f3c;">{$delivery_label}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 20px;border-bottom:1px solid #e8f4fd;">
                    <table width="100%">
                      <tr>
                        <td style="font-size:13px;color:#64748b;">Sous-total produits</td>
                        <td style="font-size:13px;font-weight:600;color:#0d1f3c;text-align:right;">{$cart_subtotal} DA</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 20px;border-bottom:1px solid #e8f4fd;">
                    <table width="100%">
                      <tr>
                        <td style="font-size:13px;color:#64748b;">Frais de livraison</td>
                        <td style="font-size:13px;font-weight:600;color:#0d1f3c;text-align:right;">{$delivery_fee} DA</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 20px;background:rgba(0,180,216,0.08);">
                    <table width="100%">
                      <tr>
                        <td style="font-size:15px;font-weight:700;color:#1a3a8f;">💰 TOTAL À ENCAISSER</td>
                        <td style="font-size:18px;font-weight:900;color:#1a3a8f;text-align:right;">{$total_price} DA</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin:10px 0 0;font-size:12px;color:#94a3b8;text-align:center;">💳 Paiement à la livraison (COD)</p>
            </td>
          </tr>

          <!-- ACTION BUTTONS -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="text-align:center;margin:0 0 16px;font-size:13px;color:#64748b;">Contactez le client pour confirmer la commande :</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding:0 6px;">
                    <a href="https://wa.me/213{$phone_clean_for_link}?text={$whatsapp_msg}"
                       style="display:inline-block;padding:14px 28px;background:#25d366;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:700;">
                      💬 WhatsApp
                    </a>
                  </td>
                  <td align="center" style="padding:0 6px;">
                    <a href="tel:{$telephone}"
                       style="display:inline-block;padding:14px 28px;background:#1a3a8f;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:700;">
                      📞 Appeler
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                Commande reçue via <strong style="color:#1a3a8f;">BlueWave Pools</strong> · bluewave-pools.dz<br>
                {$date}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

// ── Build Plain Text Fallback ─────────────────────────────
$text_body = <<<TEXT
NOUVELLE COMMANDE BLUEWAVE POOLS — {$date}
===========================================

PRODUITS COMMANDÉS
{$cart_text_lines}
CLIENT
Nom complet : {$prenom} {$nom}
Téléphone   : {$telephone}
Wilaya      : {$wilaya}
Commune     : {$commune}
Notes       : {$notes}

LIVRAISON & PAIEMENT
Mode           : {$delivery_label}
Sous-total     : {$cart_subtotal} DA
Frais livraison: {$delivery_fee} DA
TOTAL COD      : {$total_price} DA

---
BlueWave Pools | bluewave-pools.dz
TEXT;

// ── Save order to file (backup — works always) ───────────
$orders_dir = __DIR__ . '/orders';
if (!is_dir($orders_dir)) {
    mkdir($orders_dir, 0755, true);
}

$order_data = [
    'date'          => $date,
    'client'        => ['prenom' => $prenom, 'nom' => $nom, 'telephone' => $telephone, 'wilaya' => $wilaya, 'commune' => $commune, 'notes' => $notes],
    'cart'          => $cart_items,
    'cart_subtotal' => $cart_subtotal,
    'delivery'      => ['label' => $delivery_label, 'fee' => $delivery_fee],
    'total'         => $total_price,
];

$order_file = $orders_dir . '/order_' . date('Ymd_His') . '_' . rand(100, 999) . '.json';
file_put_contents($order_file, json_encode($order_data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

// ── Send via Gmail SMTP ───────────────────────────────────
$nb_items = count($cart_items);
$subject  = $config['subject_prefix'] . " ({$nb_items} article" . ($nb_items > 1 ? 's' : '') . ") - {$prenom} {$nom} ({$wilaya})";

bluewave_smtp($config, $subject, $html_body, $text_body);

// ── Response — success as long as order was saved ─────────
echo json_encode([
    'success' => true,
    'message' => 'Commande enregistrée avec succès'
]);
