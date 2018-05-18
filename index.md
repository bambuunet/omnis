.swiper-container
  ul.swiper-wrapper
    li.swiper-slide
      a(href="/exhibitions/2017/")
        [img(src="/img/artists/ToruKaneko/01m.jpg"style="max-height:432px;max-width:432px")]
    li.swiper-slide
      a(href="/exhibitions/2017/")
        [img(src="/img/artists/YukariAndo/01m.jpg"style="max-height:432px;max-width:304px")]
    li.swiper-slide
      a(href="/exhibitions/2017/")
        [img.yoko(src="/img/artists/NobuyoshiFukushima/01m.jpg"style="max-height:302px;max-width:432px")]
    li.swiper-slide
      a(href="/exhibitions/2017/")
        [img(src="/img/artists/MikiSugiyama/01m.jpg"style="max-height:432px;max-width:332px")]
    li.swiper-slide
      a(href="/exhibitions/2017/")
        [img.yoko(src="/img/artists/AiMorikawa/01m.jpg"style="max-height:294px;max-width:432px")]
    li.swiper-slide
      a(href="/exhibitions/2017/")
        [img(src="/img/artists/MikikoHirayama/01m.jpg"style="max-height:432px;max-width:315px")]
  #slideTitle.*center
    a(href="/exhibitions/2017/") Exhibition 2017

script
  $$(window).on('load', function(){
    setTimeout(function(){
      new Swiper('.swiper-container',{
        loop: true,
        //paginationClickable:true,
        //calculateHeight:true,
        touchRatio:0.6,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }, 300);


  });

