<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    include "./config.php";
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $title = $_POST['title'];
    $address = $_POST['address'];
    $salary = $_POST['salary'];
    $content = $_POST['content'];
    // $jobImg = $_FILES['img'];
    $jobImg = "takoyaki.jpg";
    // $targetDir = "./img/";
    
        // echo $content;

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
        $sql = "UPDATE ja_tb SET title = '$title',  'address' = '$address', salary='$salary',  content = $content WHERE jobid = '$jobid';";
        $dbCon->query($sql);
            echo $sql; 
        $dbCon->close();
        }
    }
    }
?>