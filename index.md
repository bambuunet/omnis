.swiper-container
  ul.swiper-wrapper
    li.swiper-slide
      [img(src="/img/topB1.jpg"style="max-height:432px;max-width:432px")]
    li.swiper-slide
      [img(src="/img/Artists2-01.jpg"style="max-height:432px;max-width:304px")]
    li.swiper-slide
      [img.yoko(src="/img/Artists2-02.jpg"style="max-height:302px;max-width:432px")]
    li.swiper-slide
      [img.yoko(src="/img/Artists2-03.jpg"style="max-height:294px;max-width:432px")]
    li.swiper-slide
      [img(src="/img/Artists2-04.jpg"style="max-height:432px;max-width:332px")]
    li.swiper-slide
      [img(src="/img/Artists2-06.jpg"style="max-height:432px;max-width:315px")]
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
