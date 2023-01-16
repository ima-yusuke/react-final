import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Home({setMsg,msg}){
    const navigate = useNavigate();
    const [sid,setSid] = useState('');
    const sss = sessionStorage.getItem("sid");
    const getSid = (e) =>{
        console.log(e.target)
        jsonSrv.get("test2.php")
        .then(res=>{
            console.log(res);
            setSid(res.data);
            sessionStorage.setItem("sid",res.data.sid);
        })
    };
    const sendSid = () =>{
        const formData = new FormData();
        if(sessionStorage.getItem("sid")!=null){
            formData.append("sid",sessionStorage.getItem("sid"));
            jsonSrv.send("getSid.php",formData)
            .then(res=>{
                console.log(res);
            })
        }
       
    }
    return(
        <>
            <h1>Session ID: {sss}</h1>
            <input value={msg} onChange={(e)=>setMsg(e.target.value)} />
            <button onClick={()=>navigate("/about")}>Click</button>
            <button onClick={getSid}>Get Session</button>
            <button onClick={sendSid}>Send Session</button>
        </>
    )
};
export default Home;