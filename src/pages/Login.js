import { useState } from "react";
import userSrv from "../Services/userSrv";

function Login(){

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
          // response.data == {"sid":session_id}
          sessionStorage.setItem("sid",response.data.sid);
          setLogin(sessionStorage.getItem("sid"))
        })
        .catch(err=>{
          console.log(err);
        })

       
    }


    return(
        <div>
            <h1>{login}</h1>
            <form onSubmit={log}>
                <input type="email" name="email2"></input>
                <input type="password" name="pass"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login