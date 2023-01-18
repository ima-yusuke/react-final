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
    // $jobImg = $_FILES['img'];
    $jobImg = "takoyaki.jpg";
    // $targetDir = "./img/";

    $dbcon = new mysqli($serverName, $dbUser, $dbpass, $dbName);
    if ($dbcon->connect_error) {
        echo "connection failed " . $dbcon->connect_error;
    } else {
        // $tmpID = $_SESSION['logUser']["uid"];
        $tmpID = 1;
        $tmpImg = "img/" . $jobImg['name'];

        $sql = "INSERT INTO `ja_tb`( `uid`, `title`, `address`, `salary`, `img`, `content`, `dis`) VALUES ('$tmpID','$title','$address','$salary','$tmpImg','$content',1)";

        $dbcon->query($sql);
        $dbcon->close();
    }
}
