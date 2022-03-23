import "../Login/Login.css";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { useAuth } from "../../Context/auth-context";
export const Login = () => {
  const {loginUser,authState} =useAuth()
  const {loading}=authState;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlerInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

  };

  const handleUserLogin = async () => {
    loginUser(user)
  };
  return (
    <>
      <Header />
      <main className="login">
        <div className="login-container mt-2">
          <h3 className="center-text">Login</h3>
          <div className="input-group">
            <label className="form-label">Email address</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={user.email}
              onChange={handlerInput}
              placeholder="Enter Email"
            />
          </div>
          <div className="input-group">
            <label className="form-label">Password </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handlerInput}
              className="form-control"
              placeholder="Enter Password"
            />
            <div className="checkbox-parent">
              <input id="show-pass" type="checkbox" />
              <label htmlFor="show-pass">Show password</label>
            </div>
          </div>
          <div className="checkbox-parent">
            <input type="checkbox" />
            <label>Remember me</label>
            <div className="forgot-pass">
              <a href="#" className="forget-content">
                <span className="forgot-pass">Forgot your Password?</span>
              </a>
            </div>
          </div>

          <div className="center">
            <button
              type="submit"
              onClick={handleUserLogin}
              className="my-2 login-btn"
            >
              {loading ? "Loading....": "Login" }
            </button>
          </div>
          <div className="center">
            <Link to="/signup" className="black-text">
              Create New Account
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
