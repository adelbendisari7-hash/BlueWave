<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

$ref = preg_replace('/[^a-zA-Z0-9]/', '', $_GET['ref'] ?? '');
if (empty($ref)) { echo json_encode([]); exit; }

$dir   = __DIR__ . '/../images/products/' . $ref . '/';
$base  = 'images/products/' . $ref . '/';
$found = [];

if (is_dir($dir)) {
    $exts = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    $files = scandir($dir);
    sort($files); // consistent order

    // Put files starting with "main" first
    usort($files, function($a, $b) {
        $aMain = stripos($a, 'main') === 0 ? 0 : 1;
        $bMain = stripos($b, 'main') === 0 ? 0 : 1;
        if ($aMain !== $bMain) return $aMain - $bMain;
        return strnatcasecmp($a, $b);
    });

    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($ext, $exts)) {
            $found[] = $base . $file;
        }
    }
}

echo json_encode(array_values($found));
