<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:Content-type');
    include "./config.php";
    $sid = $_POST['sid'];
    $jobid = $_POST['jobid'];
    session_id($sid);
    session_start();
    $uid = $_SESSION['logUser']['uid'];
    $dbcon = new mysqli($serverName, $dbUser, $dbpass, $dbName);
    if($dbcon->connect_error){
        echo "Database not connected";
    }else{
        $sql = "INSERT INTO applier_tb (jobid, uid) VALUES ($jobid, $uid)";
        $apl = "SELECT * FROM user_tb WHERE uid='$uid'";
        $result = $dbcon->query($sql);
        echo "Applied!";
    }
    $dbcon->close();
?>