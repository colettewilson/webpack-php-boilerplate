<?php
  /*
  Plugin Name: Manifest Mapping
  description: A plugin that maps assets to manifest.json
  Version: 0.1
  Author: Colette Wilson Wyatt
  */

  function asset_path($filename) {
    $manifest_path = $_SERVER['DOCUMENT_ROOT'] . '/dist/manifest.json';

    if (file_exists($manifest_path)) {
      $manifest = json_decode(file_get_contents($manifest_path), TRUE);
    } else {
      $manifest = [];
    }

    if (array_key_exists($filename, $manifest)) {
      return $manifest[$filename];
    }

    return $filename;
  }
?>