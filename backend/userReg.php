<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Header:Content-Type');
    header('Content-Type:application/json');
    include "./config.php";
    if($_SERVER['REQUEST_METHOD']=="POST"){
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $pass = password_hash($_POST['pass'],PASSWORD_DEFAULT);
        // $pass = $_POST['pass'];
        $type = intval($_POST['type']);
        $dbcon = new mysqli($serverName,$dbUser,$dbpass,$dbName);
        if($dbcon->connect_error){
            echo "connection failed ".$dbcon->connect_error;
        }else{
            $sql = "INSERT INTO user_tb (fname,lname,email,pass,type) VALUES ('$fname','$lname','$email','$pass',$type)";
            if($dbcon->query($sql)===TRUE){
                echo "You have been registered";
            }else{
                echo "Error in the registeration: ".$dbcon->error;
            }
            $dbcon->close();
        }
    }
?>