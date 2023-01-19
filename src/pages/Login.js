import { formToJSON } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userSrv from "../Services/userSrv";
import { Link } from "react-router-dom";

function Login({ setRole,setId}) {
    const [login, setLogin] = useState("")
    // to get the session id, later encrypted to protect the userinfo
    const navigate = useNavigate()

    const log = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        // const data = formToJSON(formData)
        userSrv.register("log.php", formData)
            .then(response => {
                console.log(response);
                sessionStorage.setItem("sid", response.data.sid);
                // setLogin(sessionStorage.getItem("sid"))
                sessionStorage.setItem(response.data.user['uid'],response.data.user['uid'])
                switch (response.data.role) {
                    case 0:
                        setRole(0)
                        navigate("/admin")
                        break;
                    case 1:
                        setRole(1)
                        navigate("/user")
                        break;
                    case 2:
                        setRole(2)
                        navigate("/Employer")
                        break;
                    default:
                        break;
                }
            })
            .catch(err => {
            })

    }

    return (
        <>
            <div class="form-wrapper">
            <h1>Sign In</h1>
            <form onSubmit={log}>
                <div className="form-item">
                <label for="email"></label>
                <input type="email" name="email" id="email" required="required" placeholder="Email Address"></input>
                </div>
                <div className="form-item">
                <label for="password"></label>
                <input type="password" name="pass" id="pass" required="required" placeholder="Password"></input>
                </div>
                <div className="form-item">
                <label htmlFor="role" className="form-label">Select your role</label>
                <select className="form-select form-select-lg" name="role" required>
                    <option defaultValue disabled>Select one</option>
                    <option value="0">Administrator</option>
                    <option value="1">User</option>
                    <option value="2">Employer</option>
                </select>      
                </div>
                <div className="button-panel">
                <input type="submit" className="button" title="Sign In" value="Sign In"></input>
                </div>
            </form>
            <div className="form-footer">
                <p><Link to= "/register">Create an account</Link></p>
            </div>
            
        </div>
        </>
    )
}
export default Login;