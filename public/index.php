<?php include('plugins/manifest.php'); ?>

<!doctype html>
<html class="modernizr-no-js">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Prefetch things -->
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//use.typekit.net">
    <link rel="dns-prefetch" href="//p.typekit.net">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">
    <link rel="dns-prefetch" href="//code.jquery.com">
    <link rel="dns-prefetch" href="//use.typekit.net">
    <link rel="dns-prefetch" href="//pi.pardot.com">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <meta name="description" content="">

    <!-- <style>
      @import url("https://use.typekit.net/abcdefg.css");
    </style> -->

    <link rel="stylesheet" href="<?php echo '/dist/' . asset_path('app.css'); ?>" type="text/css">
    <script src="/media/js/modernizr.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
    <script async src="<?php echo '/dist/' . asset_path('app.js'); ?>" type="text/javascript"></script>
  </head>
  <body>
    <div class="js-test grid">
      <div class="grid__item" style="padding: 30px; text-align: center;">
        <h1 style="margin-bottom: 20px;">Welcome to my Webpack boilerplate for PHP projects</h1>
        <h2>Hope you make something great!</h2>
        <i class="icon icon--rocket" style="width: 200px; margin-top: 50px;">
          <svg>
            <use xlink:href="/dist/sprite.svg#rocket"></use>
          </svg>
        </i>
      </div>
    </div>
  </body>
</html>

