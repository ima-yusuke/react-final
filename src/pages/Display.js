import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Display(){
    
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
    useEffect(()=>{
        display();
        console.log(jobs);
    },[])

    return(
        <>
        {jobs.map((val,id)=>
        ((val['dis']==1))?
            <div className="card" style={{ width: "25rem"}} key={id}>
                <img className="card-img-top" src={val['img']} alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title"><Link to="/details" state={val['jobid']}>{val['title']}</Link></h4>
                    <p className="card-text">salary: {val['salary']}</p>
                </div>
            </div>:null
        )}
        </>
    )
}
export default Display;