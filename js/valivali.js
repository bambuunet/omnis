var valivali = function(form){
  'use strict'

  this.form = typeof form == 'string' ? form : 'form';
  this._form = typeof form == 'string' ? '#' + form : 'form';
  this.vl = 'vl';
  this._vl = '.' + this.vl;
  this.yet = this.form + '-vl-yet';
  this._yet = '.' +  this.yet;
  this.ok = this.form + '-vl-ok';
  this._ok = '.' + this.ok;
  this.err = this.form + '-vl-err';
  this._err = '.' + this.err;
  this.input = $(this._form).find('input, textarea, select').not('input[type="hidden"]');
  this.submit = this.form + '-submit';
  this._submit = '#' + this.submit;
  this.submitDummy = this.form + '-submit-dummy';
  this._submitDummy = '#' + this.submitDummy;
  this.submitWrap = this.form + '-submit-wrap';
  this._submitWrap = '#' + this.submitWrap;
  this.msgIdRule = 'msg-(name)';
  this.requiredFamily = ['required'];
  this.submitDisabled = true;
  this.submitGoToMsg = true;
  this.submitGoToMsgCursor = 'pointer';
  this.submitGoToMsgTo = 'box';//box,box-msg,top
  this.submitGoToMsgToMarginTop = 120;
  this.clearErrorFile = true;

  this.init = function(){
    var _this = this;
    var status = 'new';

    //submit id set
    this.submitIdSet();

    //disabled
    if(this.submitDisabled){
      this.submitDisabledError();

      //go to error
      if(this.submitGoToMsg){
        this.submitGoToMsgSet();
      }
    }

    // check already input
    this.input.each(function(){

      if($(this).attr('name') === undefined) return true;

      if(_this.getMsgNode($(this)).text() != ''){
        status = 'fromServer';
        return false;
      }

      //already input && validation target
      var type = $(this).attr('type');
      var tag = $(this).prop('tagName').toLowerCase();
      if(tag == 'input'){
        if(type != 'radio' && type != 'checkbox' && type != 'range' && type != 'color' && type != 'hidden' && type != 'button' && type != 'submit'){
          if($(this).val() != ''){
            status = 'fromAntherPage';
          }
        }
      }
      else if(tag == 'textarea'){
        if($(this).val() != ''){
          status = 'fromAntherPage';
        }
      }
      else if(tag == 'select'){
        ;
      }

    });

    if(status == 'fromServer'){
      this.afterCheck();
    }
    else if(status == 'fromAntherPage'){
      this.checkAll();
    }
    else{
      this.input.each(function(){
        $(this).addClass(_this.vl);
        for(var i in _this.requiredFamily){
          if($(this).hasClass(_this.requiredFamily[i])){
            $(this).addClass(_this.yet);
          }
        }
      });
    }

    //check timing
    this.input.change(function(){
      _this.checkOne($(this));
      _this.removeYet($(this));
      _this.checkAll();
    });
    this.input.on('blur', function(){
      _this.checkOne($(this));
      _this.removeYet($(this));
      _this.checkAll();
    });
    $('html').on('click', function(){
      _this.checkAll();
    });
  };

  this.checkAll = function(){
    var _this = this;
    this.input.each(function(){
      if(!$(this).hasClass(_this.vl)){
        _this.checkOne($(this));
      }
    });

    this.afterCheck();
  };

  this.checkOne = function(node){
    if(node.attr('class') === undefined) return;

    var classes = node.attr('class').split(/\s+/);
    for(var c in classes){
      for(var m in this.methods){
        if(classes[c] == m){
          var check = this.methods[m].check(node);
          var msgNode = this.getMsgNode(node);
          if(check === true){
            node.addClass(this.ok);
            node.removeClass(this.err);
            msgNode.text('');
          }
          else if(check === false){
            continue;
          }
          else{
            node.addClass(this.err);
            node.removeClass(this.ok);
            msgNode.text(check);
            if(this.clearErrorFile && node.attr('type') == 'file'){
              node.val('');
            }
            return false;
          }
        }
      }
    }
  };

  this.methods = {
    required: {
      msg: '必須項目です',
      msgEither: 'どちらかを選択してください',
      msgOne: 'いずれかを選択してください',
      msgOneOrMore: 'いずれかを選択してください',
      msgFile: 'ファイルが選択されていません',
      check: function(x){
        var tag = x.prop('tagName').toLowerCase();
        var type = x.attr('type');

        if(tag == 'select'){
          var len = 0;
          x.children('option').each(function(){
            if($(this).attr('value') !== '') len++;
          });
          if(len == 2){
            return x.val() != '' ? true : this.msgEither;
          }
          return x.val() != '' ? true : this.msgOne;
        }

        else if(tag == 'input' && type == 'radio'){
          var bool = false;
          var len = 0;

          $('input[name="' + x.attr('name') + '"]').each(function(){
            if($(this).prop('checked') == true) bool = true;
            if($(this).attr('type') == 'radio') len++;
          });

          if(len == 2){
            return bool ? true : this.msgEither;
          }

          return bool ? true : this.msgOne;
        }

        else if(tag == 'input' && type == 'checkbox'){
          var bool = false;
          $('input[name="' + x.attr('name') + '"]').each(function(){
            if($(this).prop('checked') == true) bool = true;
          });

          return bool ? true : this.msgOneOrMore;
        }

        else if(tag == 'input' && type == 'file'){
          return x[0].files.length > 0 ? true : this.msgFile;
        }

        return x.val() != '' ? true : this.msg;
      },
    },
    number: {
      msg: '半角数字以外の文字が入力されています',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[\d\n]*$/) ? true : this.msg;
      },
    },
    numberAlphabetHyphen: {
      msg: '半角数字、半角アルファベット、半角ハイフン(-)以外の文字が入力されています',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[a-zA-Z\d\-\n]*$/) ? true : this.msg;
      },
    },
    numberHyphen: {
      msg: '半角数字、半角ハイフン(-)以外の文字が入力されています',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[\d\-\n]*$/) ? true : this.msg;
      },
    },
    ascii: {
      msg: '半角以外の文字が入力されています',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[\x20-\x7e\n]*$/) ? true : this.msg;
      },
    },
    emailChar: {
      msg: '使用できない文字が入力されています',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[\w\.\+\*\-!#$%&'/=?^`{|}~@]*$/) ? true : this.msg;
      },
    },
    email: {
      msg: 'メールアドレスのフォーマットが正しくありません',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[\w\.\+\*\-!#$%&'/=?^`{|}~]+@[\w\-]+(\.[\w\-]+)+$/) ? true : this.msg;
      },
    },
    phoneDigit: {
      msg: '半角数字のみ10桁ないし11桁でご入力ください',
      min: 10,
      max: 11,
      this: this,
      check: function(x){
        if(x.val() == '') return true;

        var relationCellName = x.attr('data-phoneDigit');
        var len = 0;
        var _this = this.this;
        if(relationCellName === undefined){
          len = x.val().length;
        }
        else{
          _this.input.each(function(){
            if($(this).attr('data-phoneDigit') == relationCellName){

              if($(this).val() == ''){
                len = 'untouched';
                return false;
              }
              else {
                len += $(this).val().length;
              }
            }
          });
        }
        if(len >= this.min && len <= this.max){
          return true;
        }
        else if(len == 'untouched'){
          return false;
        }
        else{
          return this.msg;
        }
      },
    },
    zipCodeDigit: {
      msg: '半角数字のみ7桁でご入力ください',
      len: 7,
      this: this,
      check: function(x){
        if(x.val() == '') return true;
        return x.val().length == this.len ? true : this.msg;
      },
    },
    hiragana: {
      msg: '使用できない文字が入力されています',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[ぁ-んー・　]*$/) ? true : this.msg;
      },
    },
    katakana: {
      msg: '使用できない文字が入力されています',
      check: function(x){
        if(x.val() == '') return true;
        return x.val().match(/^[ァ-ヶー・　]*$/) ? true : this.msg;
      },
    },
    max: {
      msg: '(n)文字以内でご入力ください',
      check: function(x){
        if(x.val() == '') return true;
        var len = parseInt(x.attr('data-max'));
        return x.val().length <= len ? true : this.msg.replace('(n)', len);
      },
    },
    min: {
      msg: '(n)文字以上ご入力ください',
      check: function(x){
        if(x.val() == '') return true;
        var len = parseInt(x.attr('data-min'));
        return x.val().length >= len ? true : this.msg.replace('(n)', len);
      },
    },
    just: {
      msg: '(n)文字でご入力ください',
      check: function(x){
        if(x.val() == '') return true;
        var len = parseInt(x.attr('data-just'));
        return x.val().length == len ? true : this.msg.replace('(n)', len);
      },
    },
    equal: {
      msg: '先に入力したメールアドレスと一致しません',
      this: this,
      check: function(x){
        if(x.val() == '') return true;
        var name = x.attr('data-equal');
        var val = x.val();
        var check = true;
        var _this = this.this;
        _this.input.each(function(){
          if($(this).attr('name') == name){
            if($(this).val() == ''){
              check = 'untouched';
              return false;
            }
            else if($(this).val() != val){
              check = 'err';
            }
          }
        });
        if(check === true){
          return true;
        }
        else if(check == 'untouched'){
          return false;
        }
        else if(check == 'err'){
          return this.msg;
        }
      },
    },
    fileMaxMB: {
      msg: '(n)MB以内のファイルを添付してください',
      check: function(x){
        if(x[0].files.length == 0) return true;

        var max = x.attr('data-fileMaxMB');
        return x[0].files[0].size / 1024 / 1024 < parseInt(max) ? true : this.msg.replace('(n)', max);
      }
    },
    fileMaxKB: {
      msg: '(n)KB以内のファイルを添付してください',
      check: function(x){
        if(x[0].files.length == 0) return true;

        var max = x.attr('data-fileMaxKB');
        if(this.errFileClear){
          x[0].val('');
        }
        return x[0].files[0].size / 1024 < parseInt(max) ? true : this.msg.replace('(n)', max);
      }
    },
    fileExtension: {
      msg: '添付可能なファイルの拡張子は(n)のみです',
      check: function(x){
        if(x[0].files.length == 0) return true;
        var permitExtensionArr = x.attr('data-fileExtension').toLowerCase().split(',');
        var extension = x[0].files[0].name.toLowerCase().match(/\.(\w+)$/);
        var msg = this.msg.replace('(n)', x.attr('data-fileExtension'));
        if(extension == null || extension == undefined) return msg;
        extension = extension[1];

        var check = false;
        for(var i in permitExtensionArr){
          if(extension == permitExtensionArr[i]){
            check = true;
            return false;
          }
        }
        return check ? true : msg;
      }
    },
  };

  this.removeYet = function(node){
    var _this = this;
    var name = node.attr('name');
    $(this._form).find(this._vl).each(function(){
      if($(this).attr('name') == name){
        $(this).removeClass(_this.yet);
        $(this).removeClass(_this.untouched);
      }
    });
  };

  this.afterCheck = function(){
    //all valid
    if($(this._yet).length == 0 && $(this._err).length == 0){
      if(this.submitDisabled){
        this.submitDisabledOk();
        if(this.submitGoToMsg){
          this.submitGoToMsgOk();
        }
      }
    }
    //not valid
    else{
      if(this.submitDisabled){
        this.submitDisabledError();
        if(this.submitGoToMsg){
          this.submitGoToMsgError();
        }
      }
    }
  };

  this.submitIdSet = function(){
    var _this = this;
    if($(_this._submit).length == 0){
      $('input, button').each(function(){
        if($(this).attr('type') == 'submit'){
          $(this).attr({'id': _this.submit});
          return false;
        }
      });
    }
  };

  this.submitGoToMsgSet = function(){
    var _this = this;
    var submit = $(this._submit);
    var submitFontSize = submit.css('font-size');
    var dummyHeight = submit.outerHeight();
    var dummyWidth = submit.outerWidth();
    var dummyTop = submit.css('top') == 'auto' ? 0 : submit.css('top');
    var dummyBottom = submit.css('bottom') == 'auto' ? 0 : submit.css('bottom');
    var dummyLeft = submit.css('left') == 'auto' ? 0 : submit.css('left');
    var dummyRight = submit.css('right') == 'auto' ? 0 : submit.css('right');
    var dummyMarginTop = submit.css('margin-top');
    var dummyMarginBottom = submit.css('margin-top');
    var dummyMarginLeft = submit.css('margin-left');
    var dummyMarginRight = submit.css('margin-right');
    var wrapPosition = submit.css('position') == 'static' ? 'relative' : submit.css('position');

    submit.wrap('<span id="' + this.submitWrap + '" />');
    $(this._submitWrap).css({
      'position': wrapPosition,
      'display': 'inline-block',
      'font-size': 0,
    });

    submit.after('<span id="' + this.submitDummy + '" />');
    $(this._submitDummy).css({
      'cursor': this.submitGoToMsgCursor,
      'position': 'absolute',
      'width': dummyWidth,
      'height': dummyHeight,
      'margin-left': dummyMarginLeft,
      'margin-right': dummyMarginRight,
      'margin-bottom': dummyMarginBottom,
      'margin-top': dummyMarginTop,
      'top': dummyTop,
      'bottom': dummyBottom,
      'left': dummyLeft,
      'right': dummyRight,
      'z-index': 9999
    });

    submit.css({
      'font-size': submitFontSize
    });

    $(this._submitDummy).on('click', function(){
      $(_this._yet).removeClass(_this.yet);
      $(_this._vl).removeClass(_this.vl);
      _this.checkAll();

      //go to error msg
      var errTopNode = $(_this._err).first();
      var errTop = 0;
      if(_this.submitGoToMsgTo == 'box'){
        errTop = errTopNode.offset().top;
        if(errTop == 0){
          errTop = errTopNode.parent().offset().top;
        }
      }
      else if(_this.submitGoToMsgTo == 'box-msg'){
        var msgId = '#' + _this.msgIdRule.replace('(name)', errTopNode.attr('name').replace(/([^\w\-])/g, '\\$1'));
        errTop = $(msgId).offset().top;
        if(errTop == 0){
          errTop = $(msgId).parent().offset().top;
        }
      }
      else if(_this.submitGoToMsgTo == 'top'){
        errTop = 0;
      }

      $('html, body').animate({scrollTop: errTop - _this.submitGoToMsgToMarginTop});
    });

  };

  this.submitGoToMsgOk = function(){
    $(this._submitDummy).css({'display': 'none'});
  };

  this.submitGoToMsgError = function(){
    $(this._submitDummy).css({'display': 'inline-block'});
  };

  this.submitDisabledOk = function(){
    $(this._submit).removeAttr('disabled');
  };

  this.submitDisabledError = function(){
    $(this._submit).attr({'disabled': 'disabled'});
  };

  this.getMsgNode = function(node){
    if(node.attr('name') === undefined) return null;
    var msgId = '#' + this.msgIdRule.replace('(name)', node.attr('name').replace(/([^\w\-])/g, '\\$1'));
    return $(msgId);
  };
}
