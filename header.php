<!DOCTYPE html>
<html>
  <head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102619372-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-102619372-1');
  </script>

    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="/css/reset.css?t=<?= time(); ?>">
    <link rel="stylesheet/less" href="/css/style.less?t=<?= time(); ?>">

    <?php $url = $_SERVER['REQUEST_URI']; ?>
    <?php if(preg_match('/exhibitions/', $url)): ?>
    <link rel="stylesheet/less" href="/css/exhibitions.less?t=<?= time(); ?>">
    <?php elseif(preg_match('/artists/', $url)): ?>
    <script type="text/javascript" src="/js/swiper.js"></script>
    <link rel="stylesheet/less" href="/css/swiper.css">
    <script type="text/javascript" src="/js/y2j.js?a=<?= time(); ?>"></script>
    <link rel="stylesheet/less" href="/css/artists.less?a=<?= time(); ?>">
    <?php elseif(preg_match('/about/', $url)): ?>
    <link rel="stylesheet/less" href="/css/about.less?t=<?= time(); ?>">
    <?php elseif(preg_match('/essay/', $url)): ?>
    <link rel="stylesheet/less" href="/css/essay.less?t=<?= time(); ?>">
    <?php elseif(preg_match('/contact/', $url)): ?>
    <link rel="stylesheet/less" href="/css/contact.less?t=<?= time(); ?>">

    <?php else: ?>
    <script type="text/javascript" src="/js/swiper.min.js"></script>
    <link rel="stylesheet/less" href="/css/swiper.css">
    <link rel="stylesheet/less" href="/css/top.less?t=<?= time(); ?>">
    <?php endif; ?>

    <script type="text/javascript" src="/js/petitQuery.js?a=<?= time(); ?>"></script>
    
    <script type="text/javascript" src="/js/olelo.js"></script>
    <script type="text/javascript" src="/js/haole.js"></script>
    <script type="text/javascript" src="/js/escss.js"></script>
    <script type="text/javascript" src="/js/center.js"></script>
    <script type="text/javascript" src="/js/less.min.js"></script>
    <script type="text/javascript" src="/js/omnis.js"></script>
    <title>omnis</title>
  </head>
  <body>
    <header>
      <div id="logo">
        <a data-href="/index/"><img src="/img/common/omnis_logo.png" alt="omnis"></a>
      </div>

      <nav>
        <ul>
          <li class="nav-link pulldown"><span id="nav-exhibitions" class="nav-link">Exhibitions</span>
          </li>
          <div style="display: none">
            <ul>
              <li class="nav-link"><a data-href="/#prevDescription">Current &amp; Upcoming</a></li>
              <li class="nav-link"><a data-href="/exhibitions/2017/">2017</a></li>
            </ul>
          </div>
          <li class="nav-link *none"><a data-href="/exhibitions/2017/" id="nav-exhibitions">Exhibitions</a></li>
          <li class="nav-link"><a data-href="/artists/" id="nav-artists">Artists</a></li>
          <li class="nav-link"><a data-href="/about/" id="nav-about">About</a></li>
          <li class="nav-link"><a data-href="/essay/" id="nav-essay">Essay</a></li>
          <li class="nav-link"><a data-href="/contact/" id="nav-contact">Contact</a></li>
          <li class="right"><a href="/img/pdf/20180806_omnis_release1_web.pdf" target="_blank">News Release</a></li>
        </ul>
        <ul class="social">
          <li class="*none">
            <a href="" target="_blank">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                <path fill="#aaaaaa" d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3
                c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5
                c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1
                c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7
                c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"/>
              </svg>
            </a>
          </li>
          <li class="*none">
            <a href="" target="_blank">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="24px" height="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                <path id="White_2_" fill="#aaaaaa" d="M30.7,0H1.3C0.6,0,0,0.6,0,1.3v29.3C0,31.4,0.6,32,1.3,32H17V20h-4v-5h4v-4
                c0-4.1,2.6-6.2,6.3-6.2C25.1,4.8,26.6,5,27,5v4.3l-2.6,0c-2,0-2.5,1-2.5,2.4V15h5l-1,5h-4l0.1,12h8.6c0.7,0,1.3-0.6,1.3-1.3V1.3
                C32,0.6,31.4,0,30.7,0z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/omnis.jp/" target="_blank">
            <span>Instagram @omnis.jp</span>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="18px" height="18px" viewBox="0 0 1280.000000 1280.000000"
             preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#888889" stroke="none">
            <path d="M2380 12789 c-344 -33 -683 -134 -985 -293 -235 -124 -426 -266 -625
            -466 -446 -445 -706 -1006 -760 -1636 -8 -92 -10 -1256 -8 -4079 4 -4358 -2
            -3980 64 -4273 219 -980 995 -1757 1977 -1976 294 -66 -79 -61 4357 -61 3817
            0 4021 1 4130 18 502 79 912 254 1283 550 465 371 792 892 921 1470 66 294 61
            -77 61 4347 0 4312 3 4064 -52 4325 -106 508 -343 946 -713 1315 -413 413
            -877 645 -1494 748 -93 15 -405 17 -4086 18 -2192 1 -4023 -2 -4070 -7z m7882
            -989 c174 -11 308 -37 449 -86 541 -188 935 -637 1062 -1208 l22 -101 0 -4005
            0 -4005 -22 -101 c-127 -571 -522 -1020 -1062 -1208 -57 -20 -149 -46 -205
            -59 l-101 -22 -4005 0 -4005 0 -101 22 c-644 143 -1124 623 -1267 1267 l-22
            101 0 4005 0 4005 22 101 c113 506 438 921 893 1138 201 95 377 141 595 155
            178 12 7570 13 7747 1z"/>
            <path d="M9930 10739 c-367 -56 -637 -384 -617 -749 7 -121 26 -193 79 -300
            58 -117 187 -247 305 -308 215 -111 460 -111 676 -1 108 56 245 191 299 294
            136 262 111 559 -67 793 -149 198 -426 309 -675 271z"/>
            <path d="M6110 10084 c-905 -83 -1695 -449 -2320 -1074 -412 -412 -712 -897
            -894 -1445 -129 -389 -186 -746 -186 -1165 0 -324 33 -597 106 -890 383 -1533
            1687 -2647 3264 -2790 148 -13 492 -13 640 0 1618 147 2941 1314 3289 2900
            111 508 109 1060 -5 1580 -233 1060 -928 1967 -1896 2474 -379 199 -789 327
            -1248 392 -111 15 -639 28 -750 18z m631 -1009 c496 -65 958 -261 1349 -571
            109 -87 327 -305 414 -414 315 -397 514 -874 577 -1385 16 -129 16 -481 0
            -610 -40 -322 -122 -598 -266 -890 -317 -642 -878 -1135 -1551 -1360 -791
            -264 -1656 -154 -2344 300 -220 145 -466 368 -624 565 -306 383 -498 834 -572
            1345 -27 181 -24 533 5 725 44 291 117 530 245 795 139 288 291 501 521 730
            219 219 418 364 685 499 329 167 649 255 1050 290 88 8 397 -4 511 -19z"/>
            </g>
            </svg>
            </a>
          </li>
        </ul>
        <div class="gradation gradation-left"></div>
        <div class="gradation gradation-right"></div>
        <div id="lang-menu"><span class="lang-jp">Japanese</span> | <span class="lang-en">English</span></div>
      </nav>

      <div id="lang" class="sm-none"><span class="lang-jp">JP</span> | <span class="lang-en">EN</span></div>

      <button id="hamburger" class="md-none lg-none xl-none">
        <span>MENU</span>
        <div></div>
        <div></div>
      </button>

    </header>
    <article id="article">
    