<?php
if(!$_POST){
  header('Location: /contact/?lang='.$_GET['lang']);
}

$to = 'info@omnis.jp';
$subject = 'omnis宛にお問い合わせがありました。';
$body = "名前：".$_POST['name']."\n";
$body .= "メールアドレス：".$_POST['email']."\n";
$body .= "メッセージ：\n".$_POST['message'];

$from = 'ringo@bambuu.net';
$from_mail = "ringo@bambuu.net";
$header = '';
$header .= "Content-Type: text/plain \r\n";
$header .= "Return-Path: " . $from_mail . " \r\n";
$header .= "From: " . $from ." \r\n";
$header .= "Sender: " . $from ." \r\n";
$header .= "Reply-To: " . $from_mail . " \r\n";
$header .= "Organization: " . $from . " \r\n";
$header .= "X-Sender: " . $from_mail . " \r\n";
$header .= "X-Priority: 3 \r\n";

mb_language("Japanese");
mb_internal_encoding("UTF-8");
mb_send_mail($to, $subject, $body, $header);

header('Location: /contact/complete/?lang='.$_GET['lang']);
?>