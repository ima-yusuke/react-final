import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";
function Employerpost() {
    const [jobs, setJob] = useState([]);
    const navigate = useNavigate();
    let sid = sessionStorage.getItem('sid');
    
    const display = () => {
        jsonSrv.get('getJob.php')
            .then(res => {
                setJob(res.data);
                console.log(jobs)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const jobpost = (e) => {
        const formData = new FormData(e.target);
        formData.append('sid',sid);
        jsonSrv.send('jobpost.php', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        navigate('/employer');
    }
    

    useEffect(() => {
        display()
    }, []
    )
    return (
        <div id="box">
            <nav>
                <ul>
                    <li className="var_nav">
                        <div className="link_bg"></div>
                        <div className="link_title">
                            <div className="icon">
                                <i className="fa-solid fa-house"></i>
                            </div>
                            <Link to="/employer"><span>My page</span></Link>
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
                <form onSubmit={jobpost}>
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
                    {/* <div className="form-floating mb-3">
                        <input
                            type="file"
                            className="form-control" name="img" placeholder="image" required />
                        <label htmlFor="formId1">image</label>
                    </div> */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control" name="content" placeholder="content" required />
                        <label htmlFor="formId1">content</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </section>
        </div>
    )
}
export default Employerpost;