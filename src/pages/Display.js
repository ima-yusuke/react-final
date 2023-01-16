import userSrv from "../Services/userSrv";
import httpCommon from "../httpCommon";
import { useEffect, useState, useRef } from "react";
import jsonSrv from "../Services/jsonSrv";
function Display(){
    
    const [jobs, setJob] = useState();
    const display =()=>{
        jsonSrv.get('getJob.php')
        .then(res=>{
            setJob(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        display();
        console.log(jobs);
    },[])

    return(
        <>
        </>
    )
}
export default Display;