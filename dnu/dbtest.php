<?php
$servername = "localhost";
$username = "whoever";
$password = "wha55up";
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully to MySQL!";
?>
