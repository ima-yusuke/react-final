<?php
    header('Access-Control-Allow-Origin:http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Header:Content-Type');
    $sid = $_POST['sid'];    
    session_id($sid);
    unset($_SESSION("logUser"));
    session_destroy($sid);
    // echo json_encode($_SESSION['logUser']);
    echo "log out!"
?>