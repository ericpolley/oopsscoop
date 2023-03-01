<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Build email message
$to = 'oopsscoop@usa.com';
$subject = 'New message from ' . $name;
$body = "Name: $name\n\nEmail: $email\n\nMessage: $message";

// Send email
mail($to, $subject, $body);
?>
