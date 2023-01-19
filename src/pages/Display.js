import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Display({id}){
    
    const [jobs, setJob] = useState([]);
    const display =()=>{
        jsonSrv.get('getJob.php')
        .then(res=>{
            setJob(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    // Saving uid from sessionStorage (id)
    let logId = sessionStorage.getItem(id)

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
        display()
    },[]
    )


    return(
        <>
        {jobs.map((val,id)=>
        ((val['dis']==1))?
            <div className="card" key={id}>
                <img className="card-img-top" src="" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title"><Link to= "/Test" state={val['jobid']}>{val['title']}</Link></h4>
                    <p className="card-text">salary: {val['salary']}</p>
                </div>
                <button value={id} onClick={fav}>LIKE</button>
            </div>:null
        )}
        </>
    )
}
export default Display;