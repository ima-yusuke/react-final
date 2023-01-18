<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    include "./config.php";
    $sid = file_get_contents("php://input");
    session_id($sid);
    session_start();
    $uid = $_SESSION['logUser']['uid'];

    $dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
      if($dbCon->connect_error){
        echo "connect error";
      }else{
        $sql = "SELECT * FROM ja_tb WHERE 'uid' = $uid";
        $result = $dbCon->query($sql);
      
        $jobArray = [];
        foreach($result as $data){

            array_push($jobArray,$data);
        }
        echo json_encode($jobArray);
    }
        $dbCon->close();
?>