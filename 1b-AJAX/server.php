<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    echo json_encode(["message" => "User Registered Successfully"]);
} else {
    echo json_encode(["error" => "Invalid Data"]);
}
?>
