form(method="post"action="send.php")
  div
    label(for="name") name
    input(type="text"name="name")
  div
    label(for="email") email
    input(type="text"name="email"class="email")
  div
    label(for="message") message
    textarea
  button(type="submit")
    .jp 送信
    .en Send