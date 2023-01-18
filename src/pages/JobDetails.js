import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";

function JobDetail(){
    const { state } = useLocation();
    let jobid = state;
    const [job, setJob] = useState([]);
    let details = () => {
        let formData = new FormData();
        formData.append("jobid", jobid);
        jsonSrv.send('getDetails.php', formData)
        .then(res=>{
            setJob(res.data);
        })
    }
    useEffect(()=>{
        details();
    }, [])
    let apply = () => {
        let sid = sessionStorage.getItem('sid');
        let formData = new FormData();
        formData.append("sid", sid);
        formData.append("jobid", jobid);
        jsonSrv.send('apply.php', formData)
        .then(res=>{
            alert(res.data);
        })
    }
    return (
        <>
            {
                job.map((val, idx)=>
                (jobid == val['jobid']) ?
                <section key={idx}>
                    <h3>{val['title']}</h3>
                    <article>
                        <p>{val['contents']}</p>
                        <p>{val['salary']}</p>
                        <p>{val['address']}</p>
                    </article>
                </section>
                :null)
            }
            <button type="button" onClick={apply}>Apply</button>
        </>
    )
}
export default JobDetail;