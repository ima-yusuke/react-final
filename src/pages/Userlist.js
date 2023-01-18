import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
import { useNavigate } from "react-router-dom";

function Userlist(){
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [res,setRes] = useState();

    const display =()=>{
        jsonSrv.get('getUser.php')
        .then(res=>{
            setUser(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const deleteUser=(e)=>{
        jsonSrv.send('deleteuser.php',e.target.value)
        .then(res=>{
            console.log(res);
            setRes(res);
            
        })
        .catch(err=>{
            console.log(err);
        })
        navigate('/user');
        display();
    }
  
    useEffect(()=>{
        display()
    },[]
    )

    return(
        <section>
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
            <Link to="/user"><span>User List</span></Link>
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
            <a href="<?php echo $baseName.'logout.php';?>"><span>LogOut</span></a>
          </div>
      </li>
    </ul>
    </nav>
    <table>
        <thead>
            <tr>
                 <th>
                     id
                 </th>
                 <th>
                     firstname
                 </th>
                 <th>
                     lastname
                 </th>
                 <th>
                     email
                 </th>
                 <th>
                     phonenumber
                 </th>
                 <th>
                     age
                 </th>
                 <th>
                    role
                 </th>
                 <th>
                    banned button
                 </th>
            </tr>
        </thead>
        <tbody>
        {user.map((val,id)=>
            ((val['uid']>7 && (val['dis']==1)))?
            <tr key={id}><td>{val['uid']}</td><td>{val['fname']}</td><td>{val['lname']}</td><td>{val['email']}</td><td>{val['phone']}</td><td>{val['age']}</td><td>{val['role']}</td><td><button name="uid" value={val['uid']} onClick={deleteUser}>Delete</button></td></tr>:null
        )}
        </tbody>
    </table>
  </section>
    )
}
export default Userlist;