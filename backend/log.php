<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

header('Access-Control-Allow-Header: content-type');
    include "./config.php";
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $role = $_POST['role'];
        $dbcon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
        if($dbcon->connect_error){
            echo "connection failed ".$dbcon->connect_error;
        }else{
            $sql = "SELECT * FROM user_tb ";
            $result = $dbcon->query($sql);
            foreach($result as $val){
                if($val['email']==$email && password_verify($pass,$val['pass'])){
                    session_start();
                    $sid = session_id();
                    $_SESSION['logUser'] = $val;
                    echo json_encode(["sid"=>$sid]);  
                    exit();
                }
            }
            echo "Try again";
            $dbcon->close();
        }
    }
?>