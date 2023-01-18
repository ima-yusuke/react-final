<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    include "./config.php";
    $jobid = file_get_contents('php://input');
    $dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
    if($dbCon->connect_error){
        echo "connect error";
    }else{
        $sql = "SELECT * FROM ja_tb";
        $result = $dbCon->query($sql);
    }
    foreach($result as $data){
        if($data['jobid'] == $jobid){
        $sql = "UPDATE ja_tb SET dis = 0 WHERE jobid = $jobid;";
        $dbCon->query($sql);
        echo "deleted";
        $dbCon->close();
        }
    }
?>