import React from 'react';
import '../App.scss'; // Changed to import SCSS instead of CSS
import { Link } from 'react-router-dom'; // Fixed NavLink typo
import '/AI.mp4'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src="/AI.mp4" autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create Your Imagination</h2>
            <p className="subTitle">Lessgo CustomWear 3D</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to="/register" className="btn">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          

          <form className="form grid">
            <div className="loginStatus">
              <span className='showMessage'>Login Status will go here</span>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" id="password" placeholder="Enter Password" />
              </div>
            </div>

            <button type="submit" className="btn flex">
              Login
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forget your password? <Link to="/reset">Click Here</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;