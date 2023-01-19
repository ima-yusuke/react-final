import { useState } from "react";
import userSrv from "../Services/userSrv";
import { Link } from "react-router-dom";

function Login({setId}){

    // This useState will save session_id when user could login 
    const [login,setLogin] = useState("Plese enter your Email and Password")

    const log = (event) => {
        // Preventing go to php page
        event.preventDefault();
        const formData = new FormData(event.target);

        // Posting value of input with name of input to log.php
        // {"email2" : value, "pass" : value}
        userSrv.register("log.php",formData)
        .then(response=>{
            console.log(response)
          // response.data == {"sid":session_id}
          sessionStorage.setItem(response.data.user['uid'],response.data.user['uid'])
          sessionStorage.setItem("sid",response.data.sid);
          setLogin(sessionStorage.getItem("sid"))
          setId(response.data.user['uid'])
          
        })
        .catch(err=>{
          console.log(err);
        })
    }

    return(
        <div class="form-wrapper">
            <h1>Sign In</h1>
            <form onSubmit={log}>
                <div className="form-item">
                <label for="email"></label>
                <input type="email" name="email2" required="required" placeholder="Email Address"></input>
                </div>
                <div className="form-item">
                <label for="password"></label>
                <input type="password" name="pass" required="required" placeholder="Password"></input>
                </div>
                <div className="button-panel">
                <input type="submit" className="button" title="Sign In" value="Sign In"></input>
                </div>
            </form>
            <div className="form-footer">
                <p><Link to= "/register">Create an account</Link></p>
            </div>
        </div>
    )
}
export default Login