<?php
  // Sort languages by quality
  $prefLocales = array_reduce(
    explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']),
    function ($res, $el) {
      list($l, $q) = array_merge(explode(';q=', $el), [1]);
      $res[$l] = (float) $q;
      return $res;
    }, []);

  // Sort desc
  arsort($prefLocales);

  // Check if locales match with fr
  foreach ($prefLocales as $locale => $q) {
    if (strtolower(substr($locale, 0, 2)) === "fr") {
      header("Location: /fr/");
      exit;
    }
  }

  // English by default
  header("Location: /en/");
  exit;
?>
