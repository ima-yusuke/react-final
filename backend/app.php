<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:Content-type');
include "./config.php";
$data = file_get_contents('php://input');
$dataArray = json_decode($data,true);
$sid = $dataArray[0];
$jobid = $dataArray[1];
session_id($sid);
session_start();
$uid = $_SESSION['logUser']['uid'];
// print_r($sidArray[1]);

$dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
if($dbCon->connect_error){
  echo "connect error";
}else{
  $sql = "INSERT INTO applier_tb (jobid, uid) VALUES ($jobid,$uid)";
  $dbCon->query($sql);
  echo "Applied";
}
  $dbCon->close();
// print_r($sidArray);
// print_r($sidArray[0]);
// print_r($sid['sid']);
?>