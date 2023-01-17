import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
import userSrv from "../Services/userSrv";

function JobDetail(props){
    let jobid = props.jobid;
    const [job, setJob] = useState([]);
    // const [app, setApp] = useState();
    let getDetail = () => {
        jsonSrv.send('getDetails.php', JSON.stringify({jobid: jobid}))
        .then(res=>{
            console.log(res.data);
        })
        jsonSrv.get('getDetails.php')
        .then(res=>{
            setJob(res.data);
        })
    }
    useEffect(()=>{
        getDetail()
    }, [])
    let apply = () => {
        let sid = sessionStorage.getItem('sid');
        let applyInfo = [sid, jobid];
        userSrv.register('apply.php', applyInfo)
        .then(res=>{
            console.log(res.data);
        })
        jsonSrv.send('apply.php', JSON.stringify({sid: sid}, {jobid: jobid}))
        .then(res=>{
            console.log(res.data);
            // setApp(res.data)
        })
    }
    return (
        <>
            {
                job.map((val, id)=>
                (jobid == val['jobid'])?
                <section key={id}>
                    <h3>{val['title']}</h3>
                    <article>
                        <p>{val['contents']}</p>
                        <p>{val['salary']}</p>
                        <p>{val['address']}</p>
                    </article>
                </section>
                :null)
                // Display jobs
                (sessionStorage.getItem('sid')) ?
                <button type="button" onClick={apply}>Apply</button>
                : <button type="button"><Link to="/login">Apply</Link></button>
                // Apply button
            }
        </>
    )
}
export default JobDetail;