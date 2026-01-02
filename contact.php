<?php
// Disable error reporting for production to prevent path leakage
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);

// Set headers for CORS and JSON content
header("Access-Control-Allow-Origin: *"); // Update this to your specific domain in production
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

// Load database configuration
require_once 'db_config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // Log error internally instead of showing to user
    error_log("Database connection failed: " . $conn->connect_error);
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Internal Server Error"]);
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

// Helper function to sanitize input
function sanitize_input($data)
{
    return htmlspecialchars(strip_tags(trim($data)));
}

// Extract and sanitize data
$firstName = isset($input['firstName']) ? sanitize_input($input['firstName']) : '';
$lastName = isset($input['lastName']) ? sanitize_input($input['lastName']) : '';
$email = isset($input['email']) ? sanitize_input($input['email']) : '';
$interest = isset($input['interest']) ? sanitize_input($input['interest']) : '';
$message = isset($input['message']) ? sanitize_input($input['message']) : '';

// Validation (basic)
if (empty($firstName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    $conn->close();
    exit;
}

// Insert into database using Prepared Statement
$stmt = $conn->prepare("INSERT INTO contacts (first_name, last_name, email, interest, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())");

if ($stmt === false) {
    error_log("Prepare failed: " . $conn->error);
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Internal Server Error"]);
    $conn->close();
    exit;
}

$stmt->bind_param("sssss", $firstName, $lastName, $email, $interest, $message);

if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
} else {
    error_log("Error storing message: " . $stmt->error);
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Internal Server Error"]);
}

$stmt->close();
$conn->close();
?>