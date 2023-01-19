import userSrv from "../Services/userSrv";
import {useState} from "react";
function Register(){
  const [res,setRes] = useState('');
  const register = (event) => {
    event.preventDefault();
    // prevent the page from re-render
    const formData = new FormData(event.target);
    console.log(event)
    userSrv.register("userReg.php",formData)
    // formdata to take the data of the register 
    .then(response=>{
      setRes(response.data);
      // saving the data in res, using setres tp change info
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
      //           type="text"
      //           className="form-control" name="phone" placeholder="df" required/>
      //         <label htmlFor="fname">Phone</label>
      //       </div>
      //       <div className="form-floating mb-3">
      //         <input
      //           type="password"
      //           className="form-control" name="pass" placeholder="df" required />
      //         <label htmlFor="pass">Password</label>
      //       </div>
      //       <div className="form-floating mb-3">
      //         <input
      //           type="number"
      //           className="form-control" name="age" placeholder="df" required />
      //         <label htmlFor="age">Age</label>
      //       </div>
      //       <div className="mb-3">
      //           <label htmlFor="role" className="form-label">Select your role</label>
      //           <select className="form-select form-select-lg" name="role" required>
      //               <option defaultValue disabled>Select one</option>
      //               <option value="0">Administrator</option>
      //               <option value="1">User</option>
      //               <option value="2">Employer</option>
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
    <label htmlFor="role" className="form-label">Select your role</label>
      <select className="form-select form-select-lg" name="role" required>
          <option defaultValue disabled>Select one</option>
            <option value="0">Administrator</option>
            <option value="1">User</option>
            <option value="2">Employer</option>
      </select>
    
    <button type="submit" className="btn btn-outline-primary">Register</button>
  </form>
</div>
</div> 
        
    )
};
export default Register;