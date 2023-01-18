import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";

function JobDetail(){
    const { state } = useLocation();
    let jobid = state;
    const [job, setJob] = useState([]);
    let getDetail = () => {
        let formData = new FormData();
        formData.append("jobid", jobid);
        jsonSrv.send('getDetails.php', formData)
        .then(res=>{
            console.log(res.data);
        })
        jsonSrv.get('getDetails.php')
        .then(res=>{
            console.log(res.data);
            setJob(res.data);
        })
    }
    getDetail();
    useEffect(()=>{
        job.forEach((val)=>{
            let article = document.createElement("article");
            if(jobid == val['jobid']){
                let p = document.createElement("p");
                for(let val of val){
                    p.innerText = val[val];
                    article.appendChild(p);
                }
            }
            document.getElementsByTagName("section")[0].appendChild(article);
        })
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
                <button type="button" onClick={apply}>Apply</button>
            }
        </>
    )
}
export default JobDetail;