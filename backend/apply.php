<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    include "./config.php";
    $dbcon = new mysqli($serverName, $dbUser, $dbpass, $dbName);
    $role = $_SESSION['logUser']['role'];
    if($dbcon->connect_error){
        echo "Database not connected";
    }else{
        // Get the data of the job and store in the session; $_SESSION['job']; 
        if($role == "1"){
            $apl = "SELECT * FROM user_tb WHERE role='$role'";
            $result = $dbcon->query($sql);
            if($res->num_rows > 0){
                echo json_encode(["flag"=>true]);
            }else{
                echo json_encode(["flag"=>false]);
            }
        }
        
    }
?>