form(method="post"action="/send.php")
  div
    label(for="name") name
    input.valid.blank(type="text"name="name")
    span#msg-name.msg
      span.jp ※入力必須です
      span.en *Required
  div
    label(for="email") email
    input.valid.blank(type="text"name="email"class="email")
    span#msg-email.msg
      span.jp ※入力必須です
      span.en *Required
  div
    label(for="message") message
    textarea.valid.blank(name="message")
    span#msg-message.msg
      span.jp ※入力必須です
      span.en *Required
  button#button-send(type="button"onclick="submit\(\);"disabled="disabled")
    span.jp 送信
    span.en Send
  button#button-dummy(type="button")
  input(type="hidden"name="language")
  

script
  $$(window).on('load', function(){
    var urlParam = location.search;
    $$('form').attr('action', '/send.php' + urlParam);

    $$('#button-dummy').on('click',function(){
      $$('.blank').removeClass('blank');

      var validCheck = true;
      $$('.valid').each(function(){
        if($$(this).val() == ''){
          $$(this).addClass('error');
          validCheck = false;
        }
        else{
          $$(this).removeClass('error');
        }
      });

      if(validCheck){
        $$('#button-send').removeAttr('disabled');
      }
      else{
        $$('#button-send').attr('disabled', 'disabled');
      }
    });

    $$('.valid').on('change',function(){
      $$(this).removeClass('blank');
      if($$(this).val() == ''){
        $$(this).addClass('error');
      }
      else{
        $$(this).removeClass('error');
      }
      
      var validCheck = false;
      if($$('.blank').length === 0 && $$('.error').length === 0){
        validCheck = true;
      }
      if(validCheck){
        $$('#button-send').removeAttr('disabled');
        $$()
      }
      else{
        $$('#button-send').attr('disabled', 'disabled');
      }
    });

    $$('input').on('keydown', function(e) {
      if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
        return false;
      }
      else {
        return true;
      }
    });
  });

