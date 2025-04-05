  import React, { useState } from 'react';
import '../App.scss'
import { Link } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { MdMarkEmailRead } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios from 'axios'
const Register = () => {  // Changed component name from Login to Register
  
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  
  const createUser = () => {
    Axios.post('http://localhost:8081/register',{
      Username:username,
      Password:password
    }).then(()=>{
      console.log('User has been created ')
    })
  }
  
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src="/AI.mp4" autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create Your Imagination</h2>
            <p className="subTitle">Lessgo CustomWear 3D</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Already have an account?</span> {/* Changed text */}
            <Link to="/login" className="btn"> {/* Changed to /login */}
              Login
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
           
           <h3>Let us know</h3> {/* Changed text to make sense for registration */}
          </div>

          <form className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" /> {/* Changed to email icon */}
                <input type="email" id="email" placeholder="Enter Email" onChange={(e)=>{setUsername(e.target.value)}} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <AiOutlineSwapRight className="icon" /> {/* Changed icon */}
                <input type="password" id="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Already have an account? <Link to="/login">Login Here</Link> {/* Changed text */}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register; // Changed to match component name