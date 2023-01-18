<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    include "./config.php";
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $title = $_POST['title'];
    $address = $_POST['address'];
    $salary = $_POST['salary'];
    $content = $_POST['content'];
    $jobid = $_POST['jobid'];

    $dbCon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
    if($dbCon->connect_error){
        echo "connect error";
    }else{
        $sql = "SELECT * FROM ja_tb";
        $result = $dbCon->query($sql);
    }
    foreach($result as $data){
        if($data['jobid'] == $jobid){
        $sql = "UPDATE ja_tb SET title = '$title', salary='$salary',  contents = '$content' WHERE jobid = '$jobid';";
        $dbCon->query($sql);
            // echo $data. " " .$title; 
        $dbCon->close();
        }
    }
    }
?>