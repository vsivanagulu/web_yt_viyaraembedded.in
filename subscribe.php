<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set headers for CORS and JSON content
// header("Access-Control-Allow-Origin: *"); // Restricted: Same-origin only
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

if (!$input || !isset($input['email'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON input"]);
    $conn->close();
    exit;
}

// Extract data
$email = $input['email'];

// Validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email format"]);
    $conn->close();
    exit;
}

// Check if email already exists using Prepared Statement
$stmt = $conn->prepare("SELECT id FROM subscribers WHERE email = ?");
if ($stmt === false) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Prepare failed: " . $conn->error]);
    $conn->close();
    exit;
}
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    http_response_code(409); // Conflict
    echo json_encode(["status" => "error", "message" => "Email already subscribed"]);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// Insert into database using Prepared Statement
$stmt = $conn->prepare("INSERT INTO subscribers (email, created_at) VALUES (?, NOW())");
if ($stmt === false) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Prepare failed: " . $conn->error]);
    $conn->close();
    exit;
}

$stmt->bind_param("s", $email);

if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Successfully subscribed!"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Error processing subscription: " . $stmt->error]);
}

$stmt->close();

$conn->close();
?>