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
            // console.log(jobs)
            // console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    // useEffect(()=>{
    //     display();
    //     // console.log(jobs);
    //     // jobs.forEach((val)=>{
    //     //     let li = document.createElement('li')
    //     //     li.innerHTML(val)
    //     //     document.querySelector("ul").appendChild(li)
    //     // })
    // },[])

    useEffect(()=>{
        display()
    },[]
    )

    return(
        <>
        </>
    )
}
export default Display;