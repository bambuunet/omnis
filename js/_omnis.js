(function($){
  'use strict';

  $('html').css({'opacity': 0});
  $(window).on('load', function(){
    $('html').animate({'opacity': 1}, 500);
  })

  setSizeClass();

  $(document).ready(function(){
    setSizeClass();

    var easyCss = new Escss({
      'PREFIX_OF_BREAKPOINT': {
        'sm-': 0,
        'md-': 600,
        'lg-': 960,
        'xl-': 1200
      },
      'COLOR': {
        'red': '#f00'
      }
    });
    easyCss.init();

    var easyLang = new Haole(['jp', 'en']);
    easyLang.init();

    var $dir = location.href.split("/");
    setCurrent($dir[3]);

    $('#hamburger').on('click', function(){
      $('body').animate({'opacity':0}, 300);
      setTimeout(function(){
        if($('html').hasClass('menu')){
          $('html').removeClass('menu');
          $('html').addClass('sm');
        }
        else{
          $('html').addClass('menu');
          $('html').removeClass('sm');
        }
        $('body').animate({'opacity':1}, 600);
      },300);
    });

    $('.pc .pulldown').hover(function(){
      $(this).children('div').show();
    }, function(){
      $(this).children('div').hide();
    });

    $('.pulldown').on('click', function(){
      if($('html').hasClass('menu')){
        var menu = $(this).find('div');
        if(menu.css('display') == 'none'){
          menu.show();
        }
        else{
          menu.hide();
        }
      }
      else if($('html').hasClass('sm')){
        var node = $(this).find('a').first();
        link(node);
      }
    });

    $('a').on('click', function(){
      link($(this));
    });
  });

  $(window).on('resize orientationchange', function(){
    setSizeClass();
  });

  function link(node){
    var url = node.attr('data-href');
    $('body').animate({'opacity':0}, 300);

    setTimeout(function(){
      setCurrent(url.replace('/', ''));
      $('html').removeAttr('id');
      $('html').removeClass('menu');

      setSizeClass()

      window.location = url ; 
      //$('article').markdown(url + '.md');
      $(window).scrollTop(0);

      $('body').animate({'opacity':1}, 600);
      //history.pushState('', '', url + '/');
    },300);
  }

  function setCurrent(dir){
    dir = dir.replace(/\/.*/, '');
    $('.nav-link').removeClass('current');
    $('#nav-' + dir).parent().addClass('current');
  }

  function setSizeClass(){
    var ww = $(window).width();
    if(ww < 600){
      $('html').addClass('sm');
      $('html').removeClass('pc');
    }
    else{
      $('html').removeClass('sm');
      $('html').removeClass('menu');
      $('html').addClass('pc');
    } 
  }

})(jQuery);