<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set headers for CORS and JSON content
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Database configuration
$servername = "localhost";
$username = "your_db_username"; // PLACEHOLDER
$password = "your_db_password"; // PLACEHOLDER
$dbname = "your_db_name";       // PLACEHOLDER

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON input"]);
    $conn->close();
    exit;
}

// Extract and sanitize data
$firstName = isset($input['firstName']) ? $conn->real_escape_string($input['firstName']) : '';
$lastName = isset($input['lastName']) ? $conn->real_escape_string($input['lastName']) : '';
$email = isset($input['email']) ? $conn->real_escape_string($input['email']) : '';
$interest = isset($input['interest']) ? $conn->real_escape_string($input['interest']) : '';
$message = isset($input['message']) ? $conn->real_escape_string($input['message']) : '';

// Validation (basic)
if (empty($firstName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    $conn->close();
    exit;
}

// Insert into database
// Assuming a table named 'contacts' exists with these columns.
// You need to create this table in your database.
$sql = "INSERT INTO contacts (first_name, last_name, email, interest, message, created_at) 
        VALUES ('$firstName', '$lastName', '$email', '$interest', '$message', NOW())";

if ($conn->query($sql) === TRUE) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Error storing message: " . $conn->error]);
}

$conn->close();
?>
