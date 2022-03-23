import "../Signup/Signup.css";
import { Link } from "react-router-dom";
import {Header} from '../../components/Header/Header'
import { useState } from "react";
import { useAuth } from "../../Context/auth-context";


export const Signup = () => {
  const {signupUser } =useAuth()
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    email:"",
    newPassword:"",
    confirmPassword:""
  })

  const userInputHandler=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
  }

  console.log(user)

  const signupHandler=()=>{
    signupUser(user)
  }
  return (
    <>
    <Header/>
    <main className="login">
      <div className="login-container ">
        <h3 className="center-text">Signup</h3>
        <div className="input-group">
          <label className="form-label">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={userInputHandler}
            placeholder="Enter Email"
          />
        </div>
        <div className="input-group">
          <label className="form-label">Last Name</label>
          <input
            className="form-control"
            type="text" 
            name="lastName"
            value={user.lastName}
            onChange={userInputHandler}
            placeholder="Enter Email"
          />
        </div>
        <div className="input-group">
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={userInputHandler}
            value={user.email}
            placeholder="Enter Email"
          />
        </div>
        <div className="input-group">
          <label className="form-label">New Password</label>
          <input
            className="form-control"
            type="password"
            name="newPassword"
            onChange={userInputHandler}
            value={user.newPassword}
            placeholder="Enter Password"
          />
        </div>
        <div className="input-group">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={userInputHandler}
            placeholder="Enter Password"
          />
        </div>
        <div className="checkbox-parent">
          <input type="checkbox" />
          <label>I accept all Terms & Conditions</label>
        </div>

        <div className="center">
          <button onClick={signupHandler} className="my-2 login-btn">Create New Account</button>
        </div>
        <div className="center">
          <Link className="black-text" to="/login">
            Already have an account
          </Link>
          <svg
            className="right-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
          </svg>
        </div>
      </div>
    </main>
    </>
  );
};
