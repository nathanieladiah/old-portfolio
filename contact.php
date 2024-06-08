<?php

if($_POST) {
	$name="";
	$email="";
	$phone="";
	$message="";
	$email_body = "<div>";

	if(isset($_POST['name'])) {
		$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
		$email_body .= "<div>
							<label><b>Visitor Name:</b></label>&nbsp;<span>".$name."</span>
						</div>";
	}

	if(isset($_POST['email'])) {
		$email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
		$email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
		$email_body .= "<div>
							<label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span>
						</div>";
	}

	if(isset($_POST['message'])) {
		$message = htmlspecialchars($_POST['message']);
		$email_body .= "<div>
							<label><b>Visitor Message:</b></label>
							<div>".$message."</div>
						</div>";
	}

	$recipient = "nathanieladiah@gmail.com";

	$email_body .= "</div>";

	$headers = 'MIME-Version: 1.0' . "\r\n"
	.'Content-type: text/html; charset=utf-8' . "\r\n"
	.'From: ' . $email . "\r\n";

	if(mail($recipient, $email_body, $headers)) {
		echo "<p>Thank you for contacting me, $name.</p>";
	} else {
		echo"<p>Sorry, that didn't work</p>";
	}
} else {
	echo"<p>Something went wrong</p>";
}
?>