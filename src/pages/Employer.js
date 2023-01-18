import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Employer({tmpId ,setTmpId }){
    const [jobs, setJob] = useState([]); 

    const navigate = useNavigate();

    // const display =()=>{
    //     let sid = sessionStorage.getItem('sid')
    //     console.log(sid);
    //     jsonSrv.get('getjoblist.php',sid)
    //     .then(res=>{
    //         setJob(res.data);
    //         console.log(res);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // }
    const display =()=>{
        // let sid = sessionStorage.getItem('sid')
        // console.log(sid);
        jsonSrv.get('getjob.php')
        .then(res=>{
            setJob(res.data);
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const toedit=(e)=>{
        e.preventDefault();

        // jsonSrv.send('jobedit.php',e.target.value)
        // .then(res=>{
        //     console.log(res); 
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        if(e.target.value){
            setTmpId(e.target.value);
            console.log(e.target.value);
            console.log(tmpId);
        }
        navigate('/employeredit');
        // display();
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
            <Link to="/employerpost"><span>New Post</span></Link>
        </div>
      </li>
      <li className="var_nav">
          <div className="link_bg"></div>
          <div className="link_title">
            <div className="icon"> 
            <i className="fa-solid fa-right-from-bracket"></i>
            </div>
            <a href="<?php echo $baseName.'logout.php';?>"><span>LogOut</span></a>
          </div>
      </li>
    </ul>
    </nav>
    <section>
        {jobs.map((val,id)=>
            ((val['dis']==1))? // "&&login['uid']==val['uid']"
            <div className="card" key={id}>
                <img className="card-img-top" src="holder.js/100x180/" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title">{val['title']}</h4>
                    <p className="card-text">salary: {val['salary']}</p>
                    <button name="jobid" value={val['jobid']} onClick={toedit}>edit</button>
                    
                </div>
            </div>:null
        )}
    </section>
    </div>
    )
}
export default Employer;