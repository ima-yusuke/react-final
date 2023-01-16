<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    include "./config.php";

    $dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
      if($dbCon->connect_error){
        echo "connect error";
      }else{
        $sql = "SELECT * FROM ja_tb";
        $result = $dbCon->query($sql);
      
        $jobArray = [];
        foreach($result as $data){
            array_push($jobArray,$data);
        }
        echo json_encode($jobArray);
        // print_r($jobArray);
    }
        $dbCon->close();
?>