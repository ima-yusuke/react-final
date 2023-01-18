<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Header:Content-Type');
header('Content-Type:application/json');
include "./config.php";
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $title = $_POST['title'];
    $address = $_POST['address'];
    $salary = $_POST['salary'];
    $content = $_POST['content'];
    $sid = $_POST['sid'];
    session_id($sid);
    session_start();
    $uid = $_SESSION['logUser']['uid'];
    echo $uid;
    // $jobImg = $_FILES['img'];
    $jobImg = "takoyaki.jpg";
    // $targetDir = "./img/";

    $dbcon = new mysqli($serverName, $dbUser, $dbpass, $dbName);
    if ($dbcon->connect_error) {
        echo "connection failed " . $dbcon->connect_error;
    } else {
        $sql ="INSERT INTO `ja_tb`(`uid`, `title`, `contents`, `address`, `img`, `salary`, `dis`) VALUES ($uid,'$title','$content','$address','img',$salary,1)";
        $dbcon->query($sql);
        $dbcon->close();
    }
}
