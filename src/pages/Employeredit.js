import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Employeredit( {tmpId ,setTmpId} ) {
    const [jobs, setJob] = useState([]);
    const navigate = useNavigate();
    const display = () => {
        jsonSrv.get('getJob.php')
            .then(res => {
                setJob(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }
    const jobedit = (e) => {
        const formData = new FormData(e.target);
        formData.append("jobid",tmpId);
        jsonSrv.send('jobedit.php', formData)
            .then(res => {
                console.log(res);
                // alert(res.data + "Data been added")
            })
            .catch(err => {
                console.log(err);
            })
        navigate('/employer');
        display();
    }

    useEffect(() => {
        display()
    }, []
    )
    return (
        <div id="box">
            {/* <h1>{tmpId}</h1> */}
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
                <form onSubmit={jobedit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control" name="title" placeholder="title" required />
                        <label htmlFor="formId1">title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control" name="address" placeholder="address" required />
                        <label htmlFor="formId1">address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control" name="salary" placeholder="salary" required />
                        <label htmlFor="formId1">salary</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="file"
                            className="form-control" name="img" placeholder="image" required />
                        <label htmlFor="formId1">image</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control" name="content" placeholder="content" required />
                        <label htmlFor="formId1">content</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </section>
        </div>
    )
}
export default Employeredit;