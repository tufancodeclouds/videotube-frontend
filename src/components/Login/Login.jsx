import React from "react";
import "./Login.css";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Login = ({ setLogin, setSignup }) => {
  return (
    <div className="login">
      <div className="login-card">
        <div className="login-card-title">
          <LoginOutlinedIcon sx={{ fontSize: "36px" }} />
          <h2 className="login-card-title-text">Login</h2>
        </div>

        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            className="login-form-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-form-input"
          />

          <div className="login-signup-cancel-btns">
            <div className="login-btn">Login</div>
            <div className="signup-btn" onClick={() => { setLogin(false); setSignup(true); }}>Signup</div>
            <div className="cancel-btn" onClick={() => setLogin(false)}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
