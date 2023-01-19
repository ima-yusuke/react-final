<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
	header('Access-Control-Allow-Header:Content-Type');
    include "./config.php";
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $sid = $_POST['sid'];
        session_id($sid);
        session_start();
        $jobid = $_POST['jobid'];
        $uid = $_SESSION['logUser'];
    }
    $dbCon = new mysqli($serverName, $dbUser, $dbpass, $dbName);
    if($dbCon->connect_error){
        echo "connect error";
    }else{
        $sql = "SELECT * FROM ((applier_tb INNER JOIN ja_tb ON jobid = $jobid) INNER JOIN user_tb ON uid = $uid)";
        $result = $dbCon->query($sql);
        $apps = [];
        foreach($result as $data){
            array_push($apps, $data);
        }
        echo json_encode($apps);
    }
?>