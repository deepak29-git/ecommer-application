import "../Signup/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { useAuth } from "../../Context/auth-context";
import axios from "axios";

export const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  
  const [showPassword, setShowPassword] = useState("password");
  const [icon, setIcon] = useState("visibility_off");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrorMsg(false)
  };

  const [errorMsg,setErrorMsg]=useState(false)
  const [color,setColor]=useState("")

  const signupHandler = async () => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password 
    ) {
      setErrorMsg(true);
      setColor("red");
      return;
    }
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", response.data.encodedToken);

      setAuth(true);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };



  const passwordHandler = () => {
    if (showPassword === "text") {
      setShowPassword("password");
      setIcon("visibility_off");
    } else {
      setShowPassword("text");
      setIcon("visibility");
    }
  };

  return (
    <>
      <Header />
      <main className="login signup mt-4">
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
          <small style={{color:color}}>{errorMsg&& "Please Enter FirstName"}</small>
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
          <small style={{color:color}}>{errorMsg&& "Please Enter LastName"}</small>
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
          <small style={{color:color}}>{errorMsg&& "Please Enter Email"}</small>
          <div className="input-group">
            <label className="form-label">Password</label>

            <span
              onClick={passwordHandler}
              className="material-icons visibility"
            >
              {icon}
            </span>

            <input
              className="form-control"
              type={showPassword}
              name="password"
              onChange={userInputHandler}
              value={user.password}
              placeholder="Enter Password"
            />
          </div>
          <small style={{color:color}}>{errorMsg&& "Please Enter Password"}</small>
        

          <div className="center">
            <button onClick={signupHandler} className="my-2 login-btn">
              Create New Account
            </button>
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
