import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Home({setMsg,msg,fav}){
    const navigate = useNavigate();
    const [sid,setSid] = useState('');
    const sss = sessionStorage.getItem("sid");
    const getSid = () =>{
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

    let stuObj = {
        ID:0, 
        fname:'',
        lname:''
    };
 
    const [student,setStudent] = useState(stuObj)

    // Saving input value by using onChange
    const chVal = (event) =>{
        const propertyName = event.target.name;
        setStudent(prevStat=>{
            return {...prevStat, [propertyName]:event.target.value}
        })
    }

    const add = ()=>{
        fav(pre=>{
            return [...pre,student]
        });

        stuObj = {
            ID:0, 
            fname:'',
            lname:''
        };
        setStudent(stuObj)
    }

            
    return(
        <>
            <h1>Session ID: {sss}</h1>
            <input value={msg} onChange={(e)=>setMsg(e.target.value)} />
            <button onClick={()=>navigate("/about")}>Click</button>
            <button onClick={getSid}>Get Session</button>
            <button onClick={sendSid}>Send Session</button>

            {/* ------------------------------------------ */}
            <form>
                <input name="ID" onChange={chVal} value={student['ID']}/>
                <input name="fname" onChange={chVal} value={student['fname']}/>
                <input name="lname" onChange={chVal} value={student['lname']}/>
                <button type="button" onClick={add}>Add</button>
            </form>
            
        </>
    )
};
export default Home;