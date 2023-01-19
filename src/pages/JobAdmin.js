import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function JobAdmin(){
    const [jobs, setJob] = useState([]);
    const navigate = useNavigate();
    const display =()=>{
        jsonSrv.get('getJob.php')
        .then(res=>{
            setJob(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const deletejob=(e)=>{
        jsonSrv.send('deleteJob.php',e.target.value)
        .then(res=>{
            console.log(res); 
        })
        .catch(err=>{
            console.log(err);
        })
        navigate('/admin');
        display();
    }
  
    useEffect(()=>{
        display()
    },[]
    )
    return(
        <div id="box">
   <nav>
    <ul>
      <li className="var_nav">
        <div className="link_bg"></div>
            <div className="link_title">
                <div className="icon"> 
                <i className="fa-solid fa-house"></i>
            </div>
            <Link to="/admin"><span>Job list</span></Link>
        </div>
      </li>
      <li className="var_nav">
        <div className="link_bg"></div>
          <div className="link_title">
            <div className="icon"> 
            <i className="fa-regular fa-trash-can"></i>
            </div>
            <Link to="/jobdel"><span>Deleted Job List</span></Link>
          </div>
      </li>
      <li className="var_nav">
          <div className="link_bg"></div>
          <div className="link_title">
            <div className="icon"> 
            <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <Link to="/userlist"><span>User List</span></Link>
          </div>
      </li>
      <li className="var_nav">
          <div className="link_bg"></div>
          <div className="link_title">
            <div className="icon"> 
            <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <Link to="/userdel"><span>Deleted User List</span></Link>
          </div>
      </li>
      <li className="var_nav">
          <div className="link_bg"></div>
          <div className="link_title">
            <div className="icon"> 
            <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <Link to="/login"><span>LOGOUT</span></Link>
          </div>
      </li>
    </ul>
    </nav>
    <section className="job1">
        {jobs.map((val,id)=>
            ((val['dis']==1))?
            <div className="card" key={id}>
                <img className="card-img-top" src="holder.js/100x180/" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title">{val['title']}</h4>
                    <p className="card-text">salary: {val['salary']}</p>
                    <button name="jobid" value={val['jobid']} onClick={deletejob}>delete</button>
                </div>
            </div>:null
        )}
    </section>
    </div>
    )
}
export default JobAdmin;