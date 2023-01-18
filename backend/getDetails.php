<?php
  header('Access-Control-Allow-Origin: http://localhost:3000');
  header('Access-Control-Allow-Methods:POST');
  header('Access-Control-Allow-Header:Content-Type');
  include "./config.php";
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    $jobid = $_POST['jobid'];
    $dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
      if($dbCon->connect_error){
        echo "connect error";
      }else{
        $sql = "SELECT * FROM ja_tb WHERE jobid='$jobid'";
        $result = $dbCon->query($sql);
        $detail = [];
        foreach($result as $data){
          array_push($detail,$data);
        }
        echo json_encode($detail);
      }
    $dbCon->close();
  }
?>