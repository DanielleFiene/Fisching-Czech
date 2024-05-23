<?php
if(isset($_POST['submit']))
{
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $header = "From:".$name."<".$email.">\r\n";

  $recipient = "daniellefiene@hotmail.com";

  if(mail($recipient, $message, $header))
  {
    $msg = "Mail sent";
    
    echo $msg;
  }

  print "<p>Thanks $name</p>" ;
}

else {
  echo "Sorry, that didn't work out!";
}

?>