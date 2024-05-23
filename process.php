<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $header = "From:".$name."<".$email.">\r\n";

  $recipient = "daniellefiene@hotmail.com";

  mail($recipient, $message, $header) or die("Error!");

  echo"message send";
?>