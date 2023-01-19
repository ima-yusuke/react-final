import { useEffect, useState } from "react";
import jsonSrv from "../Services/jsonSrv";
function About(){
    const [log,setLog] = useState(null);
    const sendSid = () =>{
        const formData = new FormData();
        if(sessionStorage.getItem("sid")!=null){
            formData.append("sid",sessionStorage.getItem("sid"));
            jsonSrv.send("logDisplay.php",formData)
            .then(res=>{
                console.log(res.data);
                setLog(res.data);
                console.log(log);
            })
            .catch(err =>{console.log(err)});
        }
    }
    
    useEffect(()=>{
        sendSid();
    },[])
    return(
        <div>
            <h1>About page</h1>
            <h1>{(log != null) ? log.fname+" "+log.email : null}</h1>
        </div>
       
    )
};
export default About;