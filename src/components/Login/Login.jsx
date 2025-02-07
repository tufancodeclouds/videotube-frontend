import React, { useState } from "react";
import "./Login.css";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../validations/loginValidationSchema";
import axios from "axios";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

const Login = ({ setLogin, setSignup }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setErrorMessage("");
      setSuccessMessage("");
      
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("password", values.password);

      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/users/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("User logged in successfully:", response.data);

        // Display success message from backend
        setSuccessMessage(response.data.message);

        setTimeout(() => {
          setLogin(false);
        }, 5000);

      } catch (error) {
        const errorMsg =
          error.response?.data?.message || "Login failed. Please try again.";
        setErrorMessage(errorMsg);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="login">
      <div className="login-card">
        <div className="login-card-title">
          <LoginOutlinedIcon sx={{ fontSize: "36px" }} />
          <h2 className="login-card-title-text">Login</h2>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form className="login-form" onSubmit={formik.handleSubmit}>
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

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-form-input"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="validation-error-text">{formik.errors.password}</p>
          )}

          <div className="login-signup-cancel-btns">
            <button
              type="submit"
              className="login-btn"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <>
                  Login <AutorenewRoundedIcon className="rotate" />
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
