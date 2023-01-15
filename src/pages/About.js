import { useEffect, useState } from "react";
import jsonSrv from "../Services/jsonSrv";
function About({fa}){
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
    const [favList,setFavList]=useState([])
    const sav =(e)=>{
        let val = e.target.value
        let obj = fa[val]
        let Jobj = JSON.stringify(obj)
        localStorage.setItem(obj['ID'],Jobj);
        setFavList(pre=>{
            return [...pre,val]
        });
    }

    const get=()=>{
        let getObj=JSON.parse(localStorage.getItem(2))
        console.log(getObj)
    }
    
    useEffect(()=>{
        sendSid();
    },[])
    return(
        <div>
            <h1>About page</h1>
            <h1>{(log != null) ? log.fname+" "+log.email : null}</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>LIKES</th>
                    </tr>
                </thead>
                <tbody>
                {
                    fa.map((val,idx)=>{
                        return (
                        <tr key={idx}>
                            <td>{val.ID}</td>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td><button type="button" value={idx} onClick={sav}>Likes</button></td>
                        </tr>
                        )
                    }
                )}
                </tbody>
            </table>
            <button onClick={get}>GET</button>
        </div>
       
    )
};
export default About;