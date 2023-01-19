<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    include "./config.php";

    $dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
      if($dbCon->connect_error){
        echo "connect error";
      }else{
        $sql = "SELECT * FROM user_tb";
        $result = $dbCon->query($sql);
      
        $userArray = [];
        foreach($result as $data){

            array_push($userArray,$data);
        }
        echo json_encode($userArray);
    }
        $dbCon->close();
?>