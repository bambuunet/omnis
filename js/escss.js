/*ﾟ･*:.｡..｡.:*･ﾟ ﾟ･*:.｡..｡.:*･ﾟ ﾟ･*:.｡..｡.:*･ﾟ ﾟ･*:.｡..｡.:*･ﾟ

  Escss 1.0.0
  Escss makes us escape from CSS.

  Copyright 2018- Ringo Takemura

  Licensed under MIT (http://opensource.org/licenses/MIT)
  Released on: May 1, 2018

  ﾟ･*:.｡..｡.:*･ﾟ ﾟ･*:.｡..｡.:*･ﾟ ﾟ･*:.｡..｡.:*･ﾟ ﾟ･*:.｡..｡.:*･ﾟ*/

var Escss = function(hash){

  this.hash = hash;
  this.PREFIX = '*';
  this.PREFIX_OF_BREAKPOINT = {
    'sp-': 0,
    'pc-': 768
    };
  this.BREAKPOINT = [];
  this.COLOR = {
    'main': '#26b6ff',
    'sub': '#2064ea',
    'success': '#08d194',
    'error': '#f2324c',
    'warning': '#fa3',
    'like': '#ff498f',
    'black': '#111C35',
    'navy': '#204368',
    'gray': '#93adc6',
    'light': '#e2f0ff',
    'white': '#fff',
    };
  this.CSS = null;
  this.RULE_OF_QUANTITY = {
    'mt': 'margin-top',
    'mr': 'margin-right',
    'mb': 'margin-bottom',
    'ml': 'margin-left',
    'm': 'margin',
    'pt': 'padding-top',
    'pr': 'padding-right',
    'pb': 'padding-bottom',
    'pl': 'padding-left',
    'p': 'padding',
    'w': 'width',
    'h': 'height',
    'maxw': 'max-width',
    'maxh': 'max-height',
    'minw': 'min-width',
    'minh': 'min-height',
    't': 'top',
    'r': 'right',
    'b': 'bottom',
    'l': 'left',
    'f': 'font-size',
    'z': 'z-index',
    'o': 'opacity',
    'lh': 'line-height',
    'ws': 'word-spacing',
    'ls': 'letter-spacing',
    'br': 'border-radius'
  }

  this.RULE_OF_COLOR = {
    'bg': 'background: ',
    'bd': 'border: solid 1px ',
    'bdt': 'border-top: solid 1px ',
    'bdr': 'border-right: solid 1px ',
    'bdb': 'border-bottom: solid 1px ',
    'bdl': 'border-left: solid 1px ',
    'c': 'color: '
  }

  this.RULE_OF_CONDITION = {
    'ma': 'margin:auto',
    'mta': 'margin-top:auto',
    'mra': 'margin-right:auto',
    'mba': 'margin-bottom:auto',
    'mla': 'margin-left:auto',
    'wa': 'width:auto',
    'ha': 'height:auto',
    'none': 'display:none',
    'block': 'display:block',
    'inlineblock': 'display:inline-block',
    'inline': 'display:inline',
    'flex': 'display:flex',
    'absolute': 'position:absolute',
    'fixed': 'position:fixed',
    'relative': 'position:relative',
    'underline': 'text-decoration:underline',
    'left': 'text-align:left',
    'center': 'text-align:center',
    'right': 'text-align:right',
    'top': 'vertical-align:top',
    'middle': 'vertical-align:middle',
    'bottom': 'vertical-align:bottom',
    'cursor': 'cursor:pointer',
    'help': 'cursor:help',
    'zoomin': 'cursor:zoom-in',
    'zoomout': 'cursor:zoom-out',
    'notallowed': 'cursor:not-allowed',
    'scroll': 'overflow:scroll',
    'scrollx': 'overflow-x:scroll',
    'scrolly': 'overflow-y:scroll',
    'pre': 'white-space:pre',
    'nowrap': 'white-space:nowrap'
  }

  this.init = function() {
    var timeStarted = new Date();

    this.setHashOfInit(this.hash);
    
    this.createCss();

    this.setBreakpoint();

    this.addStyleEachPrefix();
    console.info('Escss has finished. Styles were generated in ' + String(new Date() - timeStarted) + ' ms');
  }

  this.setHashOfInit = function(hash){
    if(hash != null){
      for(var key in hash){
        if(key == 'COLOR') { this.setColor(hash[key]); continue;}
        if(key == 'PREFIX_OF_BREAKPOINT') { this.setPrefixOfBreakpoint(hash[key]); continue;}
        this.setHash(key, hash[key]);
      }
    }
  }

  this.setHash = function(key, val){
    eval('' + key + '="' + String(val) + '";');
  }

  this.setColor = function(colorHash){
    for(var key in colorHash){
      this.setHash('this.COLOR["' + key + '"]', colorHash[key]);
    }
  };

  this.setPrefixOfBreakpoint = function(array){
    this.PREFIX_OF_BREAKPOINT = array;
  };

  this.setBreakpoint = function(){
    if(this.checkTypeOfBreakpoint() == 'null') return;
    if(this.checkTypeOfBreakpoint() == 'number'){ this.setBreakpointFromNumber(); return; }
    if(this.checkTypeOfBreakpoint() == 'array'){ this.setBreakpointFromHash(); return; }
  };

  this.checkTypeOfBreakpoint = function(){
    if(!this.PREFIX_OF_BREAKPOINT) return 'null';

    for(var key in this.PREFIX_OF_BREAKPOINT){
      if(typeof this.PREFIX_OF_BREAKPOINT[key] == 'number') return 'number';
      return 'array';
    }
  }

  this.setBreakpointFromNumber = function(){
    this.setBreakpointFromNumberToArray();

    this.BREAKPOINT = this.sortHashVal(this.BREAKPOINT, 'min');

    for(var i = 0; i < this.BREAKPOINT.length; i++){
      var mediaString = '@media (min-width: ' + String(this.BREAKPOINT[i]['min']) + 'px)';

      if(i < this.BREAKPOINT.length - 1) mediaString += ' and (max-width: ' + String(this.BREAKPOINT[i + 1]['min'] - 1) + 'px)';
      
      this.BREAKPOINT[i]['mediaString'] = mediaString;
    }
  }

  this.setBreakpointFromNumberToArray = function(){
    for(var key in this.PREFIX_OF_BREAKPOINT){
      this.BREAKPOINT.push({
        'prefix': key,
        'min' : this.PREFIX_OF_BREAKPOINT[key]
      });
    }
  }

  this.setBreakpointFromHash = function(){
    for(var i in this.PREFIX_OF_BREAKPOINT){
      var mediaString = '@media';
      if(typeof this.PREFIX_OF_BREAKPOINT[i]['min'] == 'number') mediaString += ' (min-width: ' + String(this.PREFIX_OF_BREAKPOINT[i]['min']) + 'px) and';
      if(typeof this.PREFIX_OF_BREAKPOINT[i]['max'] == 'number') mediaString += ' (max-width: ' + String(this.PREFIX_OF_BREAKPOINT[i]['max']) + 'px) and';
      mediaString = mediaString.replace(/and$/, '');

      this.BREAKPOINT.push({
        'prefix': this.PREFIX_OF_BREAKPOINT[i]['prefix'],
        'mediaString': mediaString
      });
    }
  }

  this.createCss = function(){
    var newStyle = document.createElement('style');
    newStyle.type = "text/css";
    document.getElementsByTagName('head').item(0).appendChild(newStyle);
    this.CSS = document.styleSheets.item(document.styleSheets.length - 1);
  }

  this.addStyleEachPrefix = function(){

    for(var i in this.BREAKPOINT){
      this.addStyleEachClass(this.BREAKPOINT[i]['prefix'], this.BREAKPOINT[i]['mediaString']);
    }

    this.addStyleEachClass(this.PREFIX, null);
  }

  this.addStyleEachClass = function(prefix, mediaString){
    var query = document.querySelectorAll('[class^="' + prefix + '"], [class*=" ' + prefix + '"]')

    for(var i=0; i<query.length; i++){
      var classArray = query[i].classList;

      for(var c=0; c<classArray.length; c++){
        var cls = classArray[c];
        var re = new RegExp('^' + this.changePrefixEscaped(prefix));
        if(cls.match(re)) this.addStyle(cls, prefix, mediaString);
      }
    }
  }

  this.addStyle = function(cls, prefix, mediaString){
    var style = this.makeStyle(cls, prefix);
    cls = cls.replace(/([^\w\-])/g, '\\$1');
    var ruleString = '.' + cls + '{' + style + ' !important;}';
    if(mediaString != null){
      ruleString = mediaString + '{' + ruleString + '}';
    }
    this.CSS.insertRule(ruleString, this.CSS.cssRules.length);
  }

  this.checkTypeOfStyleRule = function(clsExcludePrefix){
    var property = clsExcludePrefix.match(/^[a-zA-Z]+/);

    if(this.RULE_OF_QUANTITY[property]) return 'quantity';
    if(this.RULE_OF_COLOR[property]) return 'color';
    if(this.RULE_OF_CONDITION[property]) return 'condition';
    return 'other';
  }

  this.makeStyle = function(cls, prefix){
    var re = new RegExp('^' + this.changePrefixEscaped(prefix));
    var clsExcludePrefix = cls.replace(re, '');
    var type = this.checkTypeOfStyleRule(clsExcludePrefix);

    if(type == 'quantity') style = this.makeStyleOfQuantity(clsExcludePrefix);
    if(type == 'color') style = this.makeStyleOfColor(clsExcludePrefix);
    if(type == 'condition') style = this.makeStyleOfCondition(clsExcludePrefix);
    if(type == 'other') style = this.makeStyleOfOther(clsExcludePrefix);
    return style;
  }

  this.makeStyleOfQuantity = function(clsExcludePrefix){
    var propertyKey = clsExcludePrefix.match(/^[a-zA-Z]+/);
    var val = clsExcludePrefix.replace(propertyKey, '');
    if(val.match(/^\-?\d+(\.\d+)?$/)) val += 'px';
    if(val.match(/pr$/)) val = val.replace('pr', '%');
    var property = this.RULE_OF_QUANTITY[propertyKey];
    return property + ':' + val;
  }

  this.makeStyleOfColor = function(clsExcludePrefix){
    //ex c#000
    var propertyKey = clsExcludePrefix.match(/^[a-zA-Z]+/);
    var property = this.RULE_OF_COLOR[propertyKey];
    var val = clsExcludePrefix.replace(propertyKey, '');

    if(val.match(/^\#[\da-fA-F]{3}$/)) return property + val ;
    if(val.match(/^\#[\da-fA-F]{6}$/)) return property + val ;
    return property + this.COLOR[val.replace('#', '')];
  }

  this.makeStyleOfCondition = function(clsExcludePrefix){
    return this.RULE_OF_CONDITION[clsExcludePrefix];
  }

  this.makeStyleOfOther = function(clsExcludePrefix){
    //ex border-bottom:solid_1px_#000
    return clsExcludePrefix.replace(/_/g, ' ');
  }

  this.changePrefixEscaped = function(prefix){
    return prefix.replace(/([\*])/g, '\\$1');
  }

  this.sortHashVal = function(hash, keyOfSort){
    hash = hash.sort(function(a,b){
      return (a[keyOfSort] < b[keyOfSort]) ? -1 : 1;
    });
    return hash;
  }
};