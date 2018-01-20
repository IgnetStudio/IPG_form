<?php

function utf8mail($to, $s, $body, $from_name = "x", $from_a = "host@example.com", $reply = "host@example.com")
{
    $s = "=?utf-8?b?" . base64_encode($s) . "?=";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain;charset=utf-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    return mail($to, $s, $body, $headers);
}

$to = "target@example.com";
$subject = "Wiadomość z formularza: {$_REQUEST['user']}";
$body = "Imię: {$_REQUEST['user']}.\r\n\r\n" .
    "E-mail: {$_REQUEST['email']}.\r\n\r\n" .
    "Temat: {$_REQUEST['subject']}.\r\n\r\n" .
    "Wiadomość: {$_REQUEST['message']}\r\n\r\n";

$fields = array('user' => 'Imię', 'email' => 'Adres e-mail', 'subject' => 'Temat');

foreach ($fields as $key => $val) {
    if (empty($_REQUEST[$key])) {
        die('{"status":false}');
    }
}

$send = utf8mail($to, $subject, $body);

if ($send) {
    print_r('{"status":true}');
} else {
    print_r('{"status":false}');
}