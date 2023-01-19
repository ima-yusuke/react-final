import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Display(){
    
    const [jobs, setJob] = useState([]);
    const [tes, setTes] =useState("")
    const display =()=>{
        jsonSrv.get('getJob.php')
        .then(res=>{
            sendSid()
            setJob(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const sendSid = () =>{
        const formData = new FormData();
        if(sessionStorage.getItem("sid")!=null){
            formData.append("sid",sessionStorage.getItem("sid"));
            jsonSrv.send("logDisplay.php",formData)
            .then(res=>{
                console.log(res.data);
                setTes(res.data.uid)
            })
            .catch(err =>{console.log(err)});
        }
    }

    // Saving uid from logDisplay.php (res.data.uid)
    let logId = tes
    localStorage.setItem("id",logId)
    // console.log(tes)
    const fav=(e)=>{
        let idx = e.target.value;
        let obj =jobs[idx]
        let objId = obj["jobid"]

        // first Click
        if(localStorage.getItem(logId)==null){
            e.target.innerText = "DisLike"
            e.target.style.backgroundColor = "pink"
            localStorage.setItem(logId,JSON.stringify([obj]))
        }else{
            // After first click

            // Getting favarite array and Saving the Array
            let Array = JSON.parse(localStorage.getItem(logId))

            // To Add new object and Update the localStorage 
            let Array2=[obj]
            let flag = false

            // Delete the object if the object has already existed
            Array.forEach((val,idx) => {
                if(val['jobid']==objId){
                    let tmp = Array.splice(idx,1)
                    localStorage.removeItem(logId)
                    localStorage.setItem(logId,JSON.stringify(Array))
                    flag = true
                    e.target.innerText = "LIKE"
                    e.target.style.backgroundColor = "whitesmoke"
                    return false
                }
            });

            // Add new object if the object has not existed yet
            if(flag==false){
                Array.forEach((val)=>{
                    if(val['jobid']!=objId){
                        Array2.push(val)
                        localStorage.removeItem(logId)
                        localStorage.setItem(logId,JSON.stringify(Array2))
                    }
                })
                e.target.innerText = "DisLike"
                e.target.style.backgroundColor = "pink"
            }
            Array2=[]
        }
    }
    useEffect(()=>{
        display();
        console.log(jobs);
    },[])

    return(
        <>
        {jobs.map((val,id)=>
        ((val['dis']==1))?
            <div className="card"  key={id}>
                <div id="dis">
                <figure>
                    <img className="card-img-top" id="pic" src={val['img']} alt="Title"/>
                </figure>
                <div className="card-body">
                    <div id="tes2">
                    <h4 className="card-title"><Link className="test" to="/details" state={val['jobid']}>{val['title']}</Link></h4>
                    <p className="card-text">salary: {val['salary']}</p>
                    </div>
                </div>
                </div>
                    <button value={id} onClick={fav} id="bt">LIKE</button>
            </div>:null
        )}
        </>
    )
}
export default Display;