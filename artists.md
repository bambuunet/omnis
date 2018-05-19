section.director
  h1.lg-mt-8.xl-mt-8 Art Director / Artists
  .imgWrap [img#ToruKaneko(src="/img/artists/ToruKaneko/01m.jpg")]
  .textWrap
    .name Toru Kaneko
    p.jp 金子透は1955年神奈川県生まれ。  1978年に武蔵野美術大学造形学部油絵学科卒業。1980年から1982年までフランスの国立美術学校（Ecole National Superieur Des Beaux-Arts）に留学。1982年から1983年まで銅版画の前衛的な研究所（ATELIER17）にてヘイターに師事。これまでの主な展覧会に、現代日本美術展、ベルエイムジュン（パリ）、ギャラリエアンドウ（渋谷松濤）をはじめ数多くの個展。その他の主な活動に、テアトル・ティポグラフィック（フランスで活躍しているエディター）とゲーテのアルマナックの本を制作（仏、ISSY LES MOULINEAUX市立図書館買上）などがある。
    p.en 1955 Born in Yokohama, Kanagawa  1978 Graduated from Musashino Art University. 1980-1982 Ecole National Supérieur Des Beaux-Arts. 1982-1983 Atelier dix-sept studied with S.W.Hayter Exhibition:Contemporary Art Exhibition of Japan, Bernheim-jeune (Paris), Galerie Ando (Tokyo), and many others. Produced « Goethe Almanach de 1822 » with Theatre Typographique

hr

section.artists
  # Artists
  .wrap
    .person.imgTop
      #YukariAndo.imgWrap.tate [img(src="/img/artists/YukariAndo/01s.jpg")]
      .name Yukari Ando
    .person.imgTop
      .imgWrap.yoko.double [img(src="/img/artists/NobuyoshiFukushima/01s.jpg")]
      .name Nobuyoshi Fukushima
    .person.imgBottom
      .imgWrap.yoko [img(src="/img/artists/AiMorikawa/01s.jpg")]
      .name Ai Morikawa
    .person.imgBottom
      .imgWrap.tate [img(src="/img/artists/MikiSugiyama/01s.jpg")]
      .name Miki Sugiyama
  .wrap
    .person.imgBottom
      .imgWrap.tate [img(src="/img/artists/NatsukiTakeuchi/01s.jpg")]
      .name Natsuki Takeuchi
    .person.imgBottom
      .imgWrap.tate [img(src="/img/artists/MikikoHirayama/01s.jpg")]
      .name Mikiko Hirayama
    .person.imgTop
      .imgWrap.tate [img(src="/img/artists/MamikoNiinuma/01s.jpg")]
      .name Mamiko Niinuma
    .person.imgTop
      .imgWrap.tate [img(src="/img/artists/YutakaIshida/01s.jpg")]
      .name Yutaka Ishida
  .wrap
    .person.imgBottom
      .imgWrap.yoko [img(src="/img/artists/taokato/03s.jpg")]
      .name tao..kato
    .person.imgBottom
      .imgWrap.tate [img(src="/img/artists/NozomuTakekawa/01s.jpg")]
      .name Nozomu Takekawa
    .person.imgTop
      .imgWrap.shikaku [img(src="/img/artists/KazuakiKaneda/01s.jpg")]
      .name Kazuaki Kaneda
    .person.imgTop
      .imgWrap.tate [img(src="/img/artists/MiwaFujimoto/01s.jpg")]
      .name Miwa Fujimoto
  .wrap
    .person.imgTop
      .imgWrap.yoko [img(src="/img/artists/YukiSato/01s.jpg")]
      .name Yuki Sato
    .person.imgTop
      .imgWrap.yoko [img(src="/img/artists/RingoTakemura/01s.jpg")]
      .name Ringo Takemura
    .person.imgBottom
      .imgWrap.yoko [img(src="/img/artists/MioHorie/01s.jpg")]
      .name Mio Horie
    .person.imgBottom
      .imgWrap.yoko [img(src="/img/artists/TomonaKonita/01s.jpg")]
      .name Tomona Konita
  .nameOnly
    .wrap
      .person
        .name Mari Tsutsumi
section.photoBy photo Mareo Suemasa
  

#works.popup
  button#popupClose
    div
    div
  .container
    .left-block
      .name
      .page-button
        div Works
        div.off Biography

    .main.swiper-container
      .swiper-wrapper

    .info
    .thumbnail.swiper-container
      .swiper-wrapper
      .swiper-button-prev
        div
        div
      .swiper-button-next
        div
        div

#biography.popup


script
  var profs = new Y2J('../yml/artists.yml');

  //$$(window).on('load resize orientationchange', function(){
  $$(window).on('load', function(){

    $$('.imgWrap').find('img').on('click', function(){
      var ww = $$(window).width();
      var wh = $$(window).height();
      var name = $$(this).attr('id');
      console.log(name);
      if(!name) return false;
      var prof = profs[name];
      console.log(profs);
      if(!prof) return false;
      var imgs = prof['img'];
      console.log(name);
      if(ww < wh){
        $$('html').addClass('portrait');
      }
      else{
        $$('html').removeClass('portrait');
      }

      $$('body').addClass('hide300');
      setTimeout(function(){
        $$('body').addClass('show300').removeClass('hide300');

        $$('html').removeClass('menu');
        $$('html').removeClass('sm');
        $$('html').removeClass('pc');
        $$('html').addClass('works');

        for(var i = 0; i < imgs.length; i++){
          $$('#works .main .swiper-wrapper').append('<div class="swiper-slide">').append('<img src="' + imgs[i]['file'] + '">').after('<div class="text">' + imgs[i]['title'] + '  ' + imgs[i]['year'] + '  ' + imgs[i]['size'] + '</div>');
          $$('#works .thumbnail .swiper-wrapper').append('<div class="swiper-slide">').append('<img src="' + imgs[i]['file'] + '">');
        }
        $$('#works .name').text(prof['name']);

        var main = new Swiper ('#works .main', {
          spaceBetween: 10,
          effect: 'fade',
        });

        var thumnail = new Swiper('#works .thumbnail', {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 5,
          slideToClickedSlide: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        main.controller.control = thumnail;
        thumnail.controller.control = main;

        $$('#works').css('display', 'block');

      },300);
    });

    $$('#popupClose').on('click', function(){
      $$('body').addClass('hide300');
      setTimeout(function(){
        $$('body').addClass('show300').removeClass('hide300');

        $$('html').removeClass('sm');
        $$('html').removeClass('pc');
        $$('html').removeClass('works');
        $$('html').removeClass('biography');
        $$('.popup').css('display', 'none');
        setSizeClass();
      },300);
    });

  });




