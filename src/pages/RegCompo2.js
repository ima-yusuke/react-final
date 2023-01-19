import userSrv from "../Services/userSrv";
import {useState} from "react";
function RegCompo(){
  const [res,setRes] = useState('');
  const register = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    userSrv.register("userReg.php",formData)
    .then(response=>{
      setRes(response.data);
      console.log(response);
    })
    .catch(err=>{
      console.log(err);
    })
  }
    
  return(
      // <div className="row justify-content-center align-items-center g-2">
      //     <h1>{res}</h1>
      //       <div className="col-4">
      //         <form onSubmit={register}>
      //       <div className="form-floating mb-3">
      //         <input
      //           type="text"
      //           className="form-control" name="fname" placeholder="df" required/>
      //         <label htmlFor="fname">FirstName</label>
      //       </div>
      //       <div className="form-floating mb-3">
      //         <input
      //           type="text"
      //           className="form-control" name="lname" placeholder="df" required/>
      //         <label htmlFor="lname">LastName</label>
      //       </div>
      //       <div className="form-floating mb-3">
      //         <input
      //           type="email"
      //           className="form-control" name="email" placeholder="df" required/>
      //         <label htmlFor="fname">Email</label>
      //       </div>
      //       <div className="form-floating mb-3">
      //         <input
      //           type="password"
      //           className="form-control" name="pass" placeholder="df" required />
      //         <label htmlFor="pass">Password</label>
      //       </div>
      //       <div className="mb-3">
      //           <label htmlFor="type" className="form-label">Select your role</label>
      //           <select className="form-select form-select-lg" name="type" required>
      //               <option defaultValue disabled>Select one</option>
      //               <option value="0">Student</option>
      //               <option value="1">Teacher</option>
      //           </select>
      //       </div>
      //       <button type="submit" className="btn btn-outline-primary">Register</button>
      //   </form></div>
      //   </div>

      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={register}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input type="text" name="fname" placeholder="Enter your FirstName" required/>
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input type="text" name="lname" placeholder="Enter your LastName" required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" name="email" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <span className="details">Phone</span>
                <input type="text" name="phone" placeholder="Enter your phone" required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" name="pass" placeholder="Enter your password" required/>
              </div>
              <div className="input-box">
                <span className="details">Age</span>
                <input type="text" name="age" placeholder="Enter your age" required/>
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="role" id="dot-1"/>
              <input type="radio" name="role" id="dot-2"/>
              <input type="radio" name="role" id="dot-3"/>
              <span className="gender-title">Role</span>
              <div className="category">
                <label for="dot-1">
                <span className="dot one" value="0"></span>
                <span className="role">Admin</span>
              </label>
              <label for="dot-2">
                <span className="dot two" value="1"></span>
                <span className="role">Employee</span>
              </label>
              <label for="dot-3">
                <span className="dot three" value="2"></span>
                <span className="role">User</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register"/>
            </div>
          </form>
        </div>
      </div>
  )
};
export default RegCompo;