/*
haole ver0.1.2
*/
var Haole = function(langArr, hash){
  'use strict';
  this.langArr = langArr;
  this.hash = hash;
  this.urlParameter = 'lang';
  this.controlAttribute = 'data-lang';
  this.languageButtonPrefix = 'lang-';
  this.languageClass = 'lang';
  this.currentClass = 'current-lang';
  this.paramRE = null;
  
  this.init = function() {
    var timeStarted = new Date();
    var THIS = this;

    if(hash){
      for(var key in hash){
        eval(key + '="' + hash[key] + '";');
      }
    }
    THIS.paramRE = new RegExp('(' + THIS.urlParameter + '\\=)(\\w+)');

    //set current lang
    var url = document.location.href;
    var currentLang = '';
    if(url.match(THIS.paramRE)){
      currentLang = url.match(THIS.paramRE)[2];
      THIS.setLink(currentLang);
    }
    else{
      THIS.setLink(THIS.langArr[0]);
    }

    //set click event
    for(var i in THIS.langArr){
      var lang = THIS.langArr[i];

      //id button
      $$('#' + lang).on('click', function(){
        THIS.setLink(lang);
      });

      //class button
      $$('.' + THIS.languageButtonPrefix + lang).each(function(){
        $$(this).on('click', function(){
          var classes = $$(this).attr('class').split(' ');
          for(var i in classes){
            if(classes[i].match(THIS.languageButtonPrefix)){
              var lang = classes[i].replace(THIS.languageButtonPrefix, '');
              THIS.setLink(lang);
            }
          }
        });
      });
    }

    //class button(radio & select)
    $$('.' + THIS.languageClass).on('change', function(){
      THIS.setLink(THIS.value);
    })

    //set style (display none)
    var newStyle = document.createElement('style');
    newStyle.type = "text/css";
    //$$('head').append(newStyle);
    document.getElementsByTagName('head').item(0).appendChild(newStyle);
    var css = document.styleSheets.item(document.styleSheets.length - 1);
    for(var i in THIS.langArr){
      for(var ii in THIS.langArr){
        if(i != ii){
          var tag = 'body';
          if($$('body').attr('id')){
            tag = '#' + $$('body').attr('id');
          }
          var ruleStr = tag + '[' + THIS.controlAttribute + '="' + THIS.langArr[i] + '"] .' + THIS.langArr[ii] + ':not(' + THIS.langArr[i] + '){display:none;}';
          css.insertRule(ruleStr, css.cssRules.length);
        }
      }
    }
    console.info('Haole has finished. Styles were generated in ' + String(new Date() - timeStarted) + ' ms');
  }

  this.setLink = function(lang){
    var THIS = this;

    $$('body').attr(THIS.controlAttribute, lang);

    $$('a').each(function(){
      var url = $$(this).attr('data-href');
      var anchor = "";
      if(url && url.match(/#\w+/)){
        url = $$(this).attr('data-href').replace(/#\w+/, "");
        anchor = $$(this).attr('data-href').match(/#\w+/)[0];
      }
      if(url === null || url === undefined){
        return true;
      }
      else if(url.match(THIS.paramRE)){
        url = url.replace(THIS.paramRE, '$1' + lang);
        url += anchor;
      }
      else if(url.match(/\?/)){
        url += '&' + THIS.urlParameter + '=' + lang;
        url += anchor;
      }
      else{
        url += '?' + THIS.urlParameter + '=' + lang;
        url += anchor;
      }
      $$(this).attr('data-href', url);
    })

    //remove
    for(var i in THIS.langArr){
      var _lang = THIS.langArr[i];

      $$('#' + _lang).removeClass(THIS.currentClass);

      $$('.' + THIS.languageButtonPrefix + _lang).removeClass(THIS.currentClass);
    }

    //set current to id
    $$('#' + lang).addClass(THIS.currentClass);
    
    //set current to class
    $$('.' + THIS.languageButtonPrefix + lang).addClass(THIS.currentClass);
  };


  var $$ = function(selector){
    if(Object.prototype.toString.call(selector).match(/HTML/)) return $$.clone([selector]);
    return new haoleQuery(selector);
  }

  $$.query = function(context, selector){
    var nodes = [];
    if(Object.prototype.toString.call(selector).match(/String/)){
      q =  context.querySelectorAll(selector);
      for(var i = 0; i < q.length; i++) nodes.push(q[i]);
      return nodes;
    }
    return [selector];
  }

  $$.clone = function(selector){
    var n = new haoleQuery(null);
    return n.push(selector);
  }

  var haoleQuery = function(selector){
    if (selector) this.push($$.query(document, selector));
    return this;
  }

  haoleQuery.prototype = {
    addClass: function(classes){
      for(var i=0; i<this.length; i++){
        var classes2 = $$(this[i]).attr('class');
        if(classes2 === null || classes2 === undefined) classes2 = '';
        $$(this[i]).attr('class', classes + ' ' + classes2);
      };
    },
    append: function(context){
      var arr = [];
      for(var i=0; i<this.length; i++){
        this[i].appendChild($$.createElm(context));
        arr.push(this[i].lastChild);
      }
      return $$.clone(arr);
    },
    attr: function(attribute, val){
      if(val === null || val === undefined){
        if(typeof attribute === 'string'){
          return this[0].getAttribute(attribute);
        }
        else{
        for(var i=0; i<this.length; i++){
            for(var a in attribute){
              this[i].setAttribute(a, attribute[a]);
            }
          }
        }
      }
      else{
        for(var i=0; i<this.length; i++){
          this[i].setAttribute(attribute, val);
        }
      }
      return this;
    },
    each: function(f){
      for(var i=0; i<this.length; i++){
        f.call(this[i], i,  this[i]);
      }
      return this;
    },
    on: function(event, f){
      for(var i=0; i<this.length; i++){
        this[i].addEventListener(event, f, false);
      }
      return this;
    },
    push: function(elems){
      Array().push.apply(this, elems);
      return this;
    },
    removeClass: function(classes){
      classes = classes.split(' ');
      for(var i=0; i<this.length; i++){
        var updateClasses = $$(this[i]).attr('class');
        if(!updateClasses) continue;
        for(var c in classes){
          var re = new RegExp('\\s?' + classes[c]);
          updateClasses = updateClasses.replace(re, '');
        }
        $$(this[i]).attr('class', updateClasses);
      }
      return this;
    },
  }

};