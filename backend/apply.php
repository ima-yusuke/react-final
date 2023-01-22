<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:Content-type');
    include "./config.php";
    $sid = $_POST['sid'];
    $jobid = $_POST['jobid'];
    session_id($sid);
    session_start();
    $uid = $_SESSION['logUser']['uid']; // 변수등록
    $dbcon = new mysqli($serverName, $dbUser, $dbpass, $dbName);
    if($dbcon->connect_error){
        echo "Database not connected";
    }else{
        // Get the data of the job and store in the session; $_SESSION['job']; 
        if($role == "1"){ // an alternative set an admin variable and always check if that exists when user logs in
            $apl = "SELECT * FROM user_tb WHERE role='$role'";
            $result = $dbcon->query($sql);
            if($res->num_rows > 0){
                echo json_encode(["flag"=>true]);
            }else{
                echo json_encode(["flag"=>false]);
            }
        }
        
        $sql = "INSERT INTO applier_tb (jobid, uid) VALUES ($jobid, $uid)";
        $dbcon->query($sql);
        echo "Applied!";
    }
    $dbcon->close();
?>