import { useLocation, Link} from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
import { useEffect, useState } from "react";
import userSrv from "../Services/userSrv";
function Test(){
    const { state } = useLocation();
    console.log(state);
    const [jobs, setJob] = useState([]);

    const getdetail=()=>{
        jsonSrv.get('getJob.php')
        .then(res=>{
            setJob(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getdetail()
    },[]
    )

    const apply=()=>{
            let sid = sessionStorage.getItem('sid');
            let jobid = state;
            let applyInfo = [sid,jobid];
            userSrv.register('app.php',applyInfo)
            .then(res=>{
                console.log(res);
            })
    }

    return(
        <>  
        {jobs.map((val,id)=>
                (state == val['jobid'])?
            <div className="card"  key={id}>
            <div className="card-body">
                <h5 className="card-title">{val['title']}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{val['jobid']}</h6>
                <p className="card-text">{val['contents']}</p>
                <p className="card-text">{val['salary']}</p>
                <p className="card-text">{val['address']}</p>
                {/* <a href="#" onClick={apply} className="card-link">Apply</a> */}
                {(sessionStorage.getItem('sid'))?<button  onClick={apply}>Apply</button>:<button><Link to="/login">Apply</Link></button>}
            </div>
            </div>:
            null
            )}
        </>
    )
}
export default Test;