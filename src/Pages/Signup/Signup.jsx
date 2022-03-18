import "../Login/Login";
import { Link } from "react-router-dom";
import {Header} from '../../components/Header/Header'
export const Signup = () => {
  return (
    <>
    <Header/>
    <main className="login">
      <div className="login-container mt-2">
        <h3 className="center-text">Signup</h3>
        <div className="input-group">
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="input-group">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Password"
          />
        </div>
        <div className="checkbox-parent">
          <input type="checkbox" />
          <label>I accept all Terms & Conditions</label>
        </div>

        <div className="center">
          <button className="my-2 login-btn">Create New Account</button>
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
