<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $to = "daniellefiene@hotmail.com";
  $header = "From: $email";
  if(mail($to,$subject,$message,$headers)){
    echo "Email sent";
  }else{
    echo "Email sending failed";
  }

  $subject = 'Contact Form Submission';

  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  $message = 'Name: ' . $name . "\n" .
             'Email: ' . $email . "\n" .
             'Message: ' . $message;

}
?>