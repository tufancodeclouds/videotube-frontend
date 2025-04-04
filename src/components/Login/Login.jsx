import React, { useState } from "react";
import { useFormik } from "formik";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { toast } from "react-toastify";
import { loginValidationSchema } from "../../validations/loginValidationSchema";
import useApiCall from "../../hooks/useApiCall";
import "./Login.css";

const Login = ({ setLogin, setSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { apiCall, isLoading } = useApiCall();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await apiCall("/users/login", "POST", values);

        // Store tokens and user avatar in localStorage
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("avatar", response.data.user.avatar);

        // toast.success(response.message);

        resetForm();
        setLogin(false);
      } catch (error) {}
    },
  });

  return (
    <div className="login">
      <div className="login-card">
        <div className="login-card-title">
          <LoginOutlinedIcon sx={{ fontSize: "36px" }} />
          <h2 className="login-card-title-text">Login</h2>
        </div>

        <form className="login-form" onSubmit={formik.handleSubmit}>
          {/* Username Input */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="login-form-input"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="validation-error-text">{formik.errors.username}</p>
          )}

          {/* Password Input */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="login-form-input password-input"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <VisibilityOutlinedIcon />
              )}
            </span>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="validation-error-text">{formik.errors.password}</p>
          )}

          {/* Buttons */}
          <div className="login-signup-cancel-btns">
            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  Logging in <AutorenewIcon className="rotate" />
                </>
              ) : (
                "Login"
              )}
            </button>
            <div
              className="signup-btn"
              onClick={() => {
                setLogin(false);
                setSignup(true);
              }}
            >
              Signup
            </div>
            <div className="cancel-btn" onClick={() => setLogin(false)}>
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
