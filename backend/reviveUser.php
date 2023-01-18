<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    include "./config.php";
    $uid = file_get_contents('php://input');
    $dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
    if($dbCon->connect_error){
        echo "connect error";
    }else{
        $sql = "SELECT * FROM user_tb";
        $result = $dbCon->query($sql);
    }
    foreach($result as $data){
        if($data['uid']==$uid){
        $sql = "UPDATE user_tb SET dis = 1 WHERE uid = $uid;";
        $dbCon->query($sql);
        echo "user revived";
        $dbCon->close();
        }
    }
?>