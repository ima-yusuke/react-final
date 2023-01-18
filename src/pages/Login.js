import { formToJSON } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userSrv from "../Services/userSrv";

function Login() {
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
                setLogin(sessionStorage.getItem("sid"))
                switch (response.data.role) {
                    case 0:
                        navigate("/")
                        break;
                    case 1:
                        navigate("/user")
                        break;
                    case 2:
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
            <div className="container">
                <form onSubmit={log} style={{ paddingTop: "5vh", display: "flex", flexDirection: "column", alignContent: "center" }}>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-1 col-form-label" style={{ fontSize: "18px", textTransform: "uppercase" }}>Email:</label>
                        <div className="col-8">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="pass" className="col-1 col-form-label" style={{ fontSize: "18px", textTransform: "uppercase" }}>Password:</label>
                        <div className="col-8">
                            <input type="password" className="form-control" name="pass" id="pass" placeholder="Password" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Select your role</label>
                        <select className="form-select form-select-lg" name="role" required>
                            <option defaultValue disabled>Select one</option>
                            <option value="0">Administrator</option>
                            <option value="1">User</option>
                            <option value="2">Employer</option>
                        </select>
                    </div>
                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;