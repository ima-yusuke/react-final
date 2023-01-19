<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $sid = file_get_contents('php://input');
    session_id($sid);
    session_start();
    $uid = $_SESSION['logUser']['uid'];
    // echo $uid;
    echo $uid;
?>