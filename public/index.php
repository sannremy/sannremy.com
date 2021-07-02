<?php
  // Sort locales by quality
  $prefLocales = array_reduce(
    explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']),
    function ($res, $el) {
      list($l, $q) = array_merge(explode(';q=', $el), [1]);
      $res[$l] = (float) $q;
      return $res;
    }, []);

  // Sort quality desc
  arsort($prefLocales);

  // Default locale = en
  $clientLocale = "en";

  // Check if locales match with fr
  foreach ($prefLocales as $locale => $q) {
    // Extract language
    $lang = strtolower(substr($locale, 0, 2));

    if ($lang === "fr" || $lang === "en") {
      $clientLocale = $lang;
      break;
    }
  }

  // Redirect to the right locale
  header("Location: /".$clientLocale."/");
?>
