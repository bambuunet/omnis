form(method="post"action="/send.php")
  div
    label(for="name") name
    input(type="text"name="name")
  div
    label(for="email") email
    input(type="text"name="email"class="email")
  div
    label(for="message") message
    textarea(name="message")
  button(type="submit")
    span.jp 送信
    span.en Send
  input(type="hidden"name="language")

script
  $$(window).on('load', function(){
    var urlParam = location.search;
    $$('form').attr('action', '/send.php' + urlParam);
  });
