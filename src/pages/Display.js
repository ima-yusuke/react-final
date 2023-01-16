import userSrv from "../Services/userSrv";
import httpCommon from "../httpCommon";
import { useEffect, useState, useRef } from "react";
import jsonSrv from "../Services/jsonSrv";
function Display(){
    
    const [jobs, setJob] = useState([]);
    const display =()=>{
        jsonSrv.get('getJob.php')
        .then(res=>{
            setJob(res.data);
            // console.log(res.data)
            console.log(typeof(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    // console.log(typeof(jobs))
    // console.log(Array.isArray(jobs));
    console.log(jobs);


    
    useEffect(()=>{
        display()
    },[]
    )
    // console.log(jobs);
    return(
        <>
        {jobs.map((val,id)=>
            <>
               <ul>
                    <li key={id}>{val['title']}</li>
               </ul>
            
            </>
        )}
        </>
    )
}
export default Display;