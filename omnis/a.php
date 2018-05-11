<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <script type="text/javascript" src="./js/jquery.min.js?t=<?php echo time(); ?>"></script>
    <script type="text/javascript" src="./js/valium.js?t=<?php echo time(); ?>"></script>
    <script type="text/javascript" src="./js/olelo.js?t=<?php echo time(); ?>"></script>
    <style>
    html {display: flex;}
    body {display: inline-block;}
    div {display: inline;}
    body[data-lang="en"] .ar:not(.en) {display: none;}
    body[data-lang="en"] .jp:not(.en) {display: none;}


    </style>
    <title>omnis</title>
  </head>
  <body data-lang="en">
    <div class="en ar">en ar</div>
    <div class="jp en ar">jp en ar</div>
    <div class="ar">ar</div>

    <form>
      <input class="vl required equal" name="email1" data-equal="email2">
      <div id="msg-email1"></div>
      <input class="vl equal" name="email2" data-equal="email1">
      <div id="msg-email2"></div>

      <input class="vl " name="p1" data-phoneDigit="a">
      <div id="msg-p1"></div>
      <input class="vl " name="p2" data-phoneDigit="a">
      <div id="msg-p2"></div>
      <input class="vl phoneDigit" name="p3" data-phoneDigit="a">
      <div id="msg-p3"></div>

      <span class="olelo-en">en</span>
      <span class="olelo-jp">jp</span>

      <select class="olelo">
        <option value="en" class="olelo-en">en</option>
        <option value="jp" class="olelo-jp">jp</option>
      </select>

      <input type="radio" class="olelo-en" name="aaa" value="en">
      <input type="radio" class="olelo-jp" name="aaa" value="jp">

      <input type="radio" class="olelo" name="aaa" value="en">
      <input type="radio" class="olelo" name="aaa" value="jp">

      <input name="file" class="vl fileExtension fileMaxMB fileRequired " type="file" data-fileMaxMB="0.5" data-fileExtension="png,gif">
      <div id="msg-file"></div>

      <input type="submit">
    </form>

    <script type="text/javascript">
      var v = new validation();
      v.init();

      $('body').olelo(['jp', 'en'], {'langBtnPrefix': 'olelo-', 'className': 'olelo'});

    </script>
  </body>
</html>