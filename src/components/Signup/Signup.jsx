import React from "react";
import "./Signup.css";
import { useFormik } from "formik";
import { validationSchema } from "../../validations/validationSchema";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const Signup = ({ setSignup, setLogin }) => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="signup">
      <div className="signup-card">
        <div className="signup-card-title">
          <LoginOutlinedIcon sx={{ fontSize: "36px" }} />
          <h2 className="signup-card-title-text">Signup</h2>
        </div>

        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Fullname"
            className="signup-form-input"
            name="fullname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <p className="validation-text">{formik.errors.fullname}</p>
          ) : null}

          <input
            type="email"
            placeholder="Email"
            className="signup-form-input"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="validation-text">{formik.errors.email}</p>
          ) : null}

          <input
            type="text"
            placeholder="Username"
            className="signup-form-input"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="validation-text">{formik.errors.username}</p>
          ) : null}

          <input
            type="password"
            placeholder="Password"
            className="signup-form-input"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="validation-text">{formik.errors.password}</p>
          ) : null}

          <div className="upload-sec">
            <div className="upload-sec-show">
              <p className="upload-sec-show-text">Avatar</p>
              <div className="upload-sec-show-icon-wrapper">
                <FileUploadOutlinedIcon
                  sx={{ fontSize: "28px" }}
                  className="upload-sec-show-icon"
                />
                <input type="file" className="upload-form-file" />
              </div>
            </div>
          </div>

          <div className="upload-sec">
            <div className="upload-sec-show">
              <p className="upload-sec-show-text">Cover Image</p>
              <div className="upload-sec-show-icon-wrapper">
                <FileUploadOutlinedIcon
                  sx={{ fontSize: "28px" }}
                  className="upload-sec-show-icon"
                />
                <input type="file" className="upload-form-file" />
              </div>
            </div>
          </div>

          <div className="login-signup-cancel-btns">
            <button type="submit" className="signup-btn">
              Signup
            </button>
            <div
              className="login-btn"
              onClick={() => {
                setSignup(false);
                setLogin(true);
              }}
            >
              Login
            </div>
            <div className="cancel-btn" onClick={() => setSignup(false)}>
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
