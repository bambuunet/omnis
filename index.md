.swiper-container
  ul.swiper-wrapper
    li.swiper-slide
      [img(src="/img/artists/ToruKaneko/m01.jpg"style="max-height:432px;max-width:432px")]
    li.swiper-slide
      [img(src="/img/artists/YukariAndo/m01.jpg"style="max-height:432px;max-width:304px")]
    li.swiper-slide
      [img.yoko(src="/img/artists/NobuyoshiFukushima/m01.jpg"style="max-height:302px;max-width:432px")]
    li.swiper-slide
      [img.yoko(src="/img/artists/AiMorikawa/m01.jpg"style="max-height:294px;max-width:432px")]
    li.swiper-slide
      [img(src="/img/artists/MikiSugiyama/m01.jpg"style="max-height:432px;max-width:332px")]
    li.swiper-slide
      [img(src="/img/artists/MikikoHirayama/m01.jpg"style="max-height:432px;max-width:315px")]
#slideTitle.*center Exhibition 2017


script
  $$(window).on('load', function(){

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
  });

