<!DOCTYPE html>
<html>
  <head>
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
          <li class="nav-link pulldown *none"><span id="nav-exhibitions" class="nav-link">Exhibitions</span>
          </li>
          <div style="display: none">
            <ul>
              <li class="nav-link"><a data-href="/exhibitions/current/">Current &amp; Upcoming</a></li>
              <li class="nav-link"><a data-href="/exhibitions/2017/">2017</a></li>
            </ul>
          </div>
          <li class="nav-link"><a data-href="/exhibitions/2017/" id="nav-exhibitions">Exhibitions</a></li>
          <li class="nav-link"><a data-href="/artists/" id="nav-artists">Artists</a></li>
          <li class="nav-link"><a data-href="/about/" id="nav-about">About</a></li>
          <li class="nav-link"><a data-href="/essay/" id="nav-essay">Essay</a></li>
          <li class="nav-link"><a data-href="/contact/" id="nav-contact">Contact</a></li>
          <li class="right *none"><a data-href="/index_on_exhibition/">Online Shop</a></li>
        </ul>
        <ul class="social md-none lg-none xl-none *none">
          <li>
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
          <li>
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
            <a href="" target="_blank">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="24px" heigh t="24px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
                <path fill="#aaaaaa" d="M28.2,0H3.8C1.7,0,0,1.7,0,3.8v24.4C0,30.3,1.7,32,3.8,32h24.4c2.1,0,3.8-1.7,3.8-3.8V3.8
                C32,1.7,30.3,0,28.2,0z M24,4h3c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V5C23,4.4,23.4,4,24,4z M16,9.9
                c3.4,0,6.2,2.7,6.2,6.1c0,3.4-2.8,6.1-6.2,6.1c-3.4,0-6.2-2.7-6.2-6.1C9.9,12.6,12.6,9.9,16,9.9z M28,29H4c-0.6,0-1-0.4-1-1V13h4
                c-0.5,0.8-0.7,2.1-0.7,3c0,5.4,4.4,9.7,9.7,9.7c5.4,0,9.7-4.4,9.7-9.7c0-0.9-0.1-2.3-0.8-3h4v15C29,28.6,28.6,29,28,29z"/>
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
    