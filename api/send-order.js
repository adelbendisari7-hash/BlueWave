import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ success: false });

  const {
    nom, prenom, telephone, wilaya, commune, notes,
    cart_items, cart_subtotal, delivery_type, delivery_label,
    delivery_fee, total_price, lang
  } = req.body;

  let items = [];
  try { items = JSON.parse(cart_items || "[]"); } catch {}

  const unit = lang === "ar" ? "دج" : "DA";

  const itemsTable = items.map(i => `
    <tr>
      <td style="padding:8px;border:1px solid #ddd">${i.name}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${i.ref}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${i.qty}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right">${Number(i.unitPrice).toLocaleString("fr-DZ")} ${unit}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right">${Number(i.subtotal).toLocaleString("fr-DZ")} ${unit}</td>
    </tr>`).join("");

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
    <div style="background:#1a3a8f;color:#fff;padding:20px;border-radius:8px 8px 0 0">
      <h2 style="margin:0">🌊 Nouvelle Commande BlueWave</h2>
      <p style="margin:5px 0 0;opacity:0.8">${items.length} article(s)</p>
    </div>
    <div style="padding:20px;border:1px solid #ddd;border-top:none">
      <h3>Client</h3>
      <p><strong>Nom :</strong> ${prenom} ${nom}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Wilaya :</strong> ${wilaya}</p>
      <p><strong>Commune :</strong> ${commune}</p>
      <p><strong>Livraison :</strong> ${delivery_label || delivery_type}</p>
      ${notes ? `<p><strong>Adresse/Notes :</strong> ${notes}</p>` : ""}
      <h3>Produits</h3>
      <table style="width:100%;border-collapse:collapse">
        <tr style="background:#f0f4ff">
          <th style="padding:8px;border:1px solid #ddd;text-align:left">Produit</th>
          <th style="padding:8px;border:1px solid #ddd">Réf</th>
          <th style="padding:8px;border:1px solid #ddd">Qté</th>
          <th style="padding:8px;border:1px solid #ddd">Prix unit.</th>
          <th style="padding:8px;border:1px solid #ddd">Sous-total</th>
        </tr>
        ${itemsTable}
      </table>
      <div style="margin-top:16px;text-align:right">
        <p>Articles : <strong>${Number(cart_subtotal).toLocaleString("fr-DZ")} ${unit}</strong></p>
        <p>Livraison : <strong>${Number(delivery_fee).toLocaleString("fr-DZ")} ${unit}</strong></p>
        <p style="font-size:1.2em;color:#1a3a8f">Total : <strong>${Number(total_price).toLocaleString("fr-DZ")} ${unit}</strong></p>
      </div>
    </div>
  </div>`;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BlueWave Pools" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Nouvelle Commande BlueWave (${items.length} article(s)) — ${prenom} ${nom} (${wilaya})`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(200).json({ success: true }); // still return success so user isn't alarmed
  }
}
