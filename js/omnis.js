'use strict';

$$('body').css({'opacity': 0});

$$(window).on('load', function(){
  $$('body').addClass('show300');
});

$$(document).ready(function(){
  setSizeClass();

  var easyLang = new Haole(['jp', 'en']);
  easyLang.init();

  var $dir = location.href.split("/");
  setCurrent($dir[3]);

  $$('#hamburger').on('click', function(){
    $$('body').addClass('hide300');
    setTimeout(function(){
      $$('body').addClass('show300').removeClass('hide300');

      if($$('html').hasClass('menu')){
        $$('html').removeClass('menu');
        $$('html').addClass('sm');
      }
      else{
        $$('html').addClass('menu');
        $$('html').removeClass('sm');
      }
    },300);
  });

  $$('.pc .pulldown').on('mouseover', function(){
    $$(this).next('div').css('display', 'block');
    $$(this).next('div').addClass('show200');
  });
  $$('.pc .pulldown + div').on('mouseover', function(){
    $$(this).css('display', 'block');
    $$(this).addClass('show200');
  });
  $$('.pc .pulldown').on('mouseout', function(){
    $$(this).next('div').css('display', 'none');
  });
  $$('.pc .pulldown + div').on('mouseout', function(){
    $$(this).css('display', 'none');
  });

  $$('.pulldown').on('click', function(){
    //if($$('html').hasClass('menu')){
      var menu = $$(this).next('div');
      if(menu.css('display') == 'none'){
        menu.css('display', 'block');
      }
      else{
        menu.css('display', 'none');
      }
    //}
    /*if($$('html').hasClass('sm')){
      var node = $$(this).find('a').first();
      link(node);
    }*/
  });

  $$('#lang-menu').on('click', function(){
    $$('body').addClass('hide300');

    setTimeout(function(){
      $$('html').removeClass('menu');
      $$('html').addClass('sm');
      $$('body').addClass('show300');
      $$('body').removeClass('hide300');
    }, 400);
  });

  $$('a').on('click', function(){
    link($$(this));
  });
});

$$(window).on('load', function(){
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
});

$$(window).on('resize orientationchange', function(){
  setSizeClass();
  reset();
});


function link(node){
  var url = node.attr('data-href');
  $$('body').addClass('hide300');

  setTimeout(function(){
    setCurrent(url.replace('/', ''));
    $$('html').removeAttr('id');
    $$('html').removeClass('menu');
    setSizeClass()

    window.location = url ; 

    $$('body').addClass('show300');
  }, 400);
}

function setCurrent(dir){
  dir = dir.replace(/\/.*/, '');
  $$('.nav-link').removeClass('current');
  $$('#nav-' + dir).parent().addClass('current');
}

function setSizeClass(){
  var ww = $$(window).width();
  $$('html').removeClass('pc');
  $$('html').removeClass('sm');
  $$('html').removeClass('menu');
  if(ww < 600){
    $$('html').addClass('sm');
  }
  else{
    $$('html').addClass('pc');
  }
}

function reset(){
  $$('.pulldown').next('div').css('display', 'none');
}
