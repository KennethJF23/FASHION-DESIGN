import React, { useState } from 'react';
import '../App.scss'; // Changed to import SCSS instead of CSS
import { Link } from 'react-router-dom'; // Fixed NavLink typo
import '/AI.mp4';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  // State to show login status message

  const [users, setUsers] = useState([
    { username: "kennethfernandes113@gmail.com", password: "Ken@23190" },
    { username: "Kenneth", password: "ken23190" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email and password match any user in the array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === email && u.password === password);

    if (user) {
      setMessage('Login successful! Redirecting...');

      // Redirect to the desired URL after successful login
      window.location.href = 'https://KuroiAkuma19.github.io/CustomWear/';
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}> 
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
            <div className="loginStatus">
              <span className='showMessage'>{message}</span>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input 
                  type="text" 
                  id="username" 
                  placeholder="Enter Username" 
                  onChange={(e) => { setEmail(e.target.value); }} 
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Enter Password" 
                  onChange={(e) => { setPassword(e.target.value); }} 
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              Login
              <AiOutlineSwapRight className="icon" />
            </button> 
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
