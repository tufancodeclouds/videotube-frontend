import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { signupValidationSchema } from "../../validations/signupValidationSchema";
import authApi from "../../api/authApi";
import "./Signup.css";

const Signup = ({ setSignup, setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      avatar: null,
      coverImage: null,
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const formData = new FormData();
      formData.append("fullname", values.fullname);
      formData.append("email", values.email);
      formData.append("username", values.username);
      formData.append("password", values.password);
      formData.append("avatar", values.avatar);
      formData.append("coverImage", values.coverImage ? values.coverImage : null);

      try {
        const response = await authApi.post("/users/register", formData);

        console.log(response);

        toast.success(response.data.message);

        resetForm();

        setSignup(false);

      } catch (error) {
        toast.error(
          error.response?.data?.message || "Signup failed. Please try again."
        );
      } finally {
        setSubmitting(false);
      }
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
          {formik.touched.fullname && formik.errors.fullname && (
            <p className="validation-error-text">{formik.errors.fullname}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="signup-form-input"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="validation-error-text">{formik.errors.email}</p>
          )}

          <input
            type="text"
            placeholder="Username"
            className="signup-form-input"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="validation-error-text">{formik.errors.username}</p>
          )}

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="signup-form-input"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
            </span>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="validation-error-text">{formik.errors.password}</p>
          )}
          
          <div className="upload-sec">
            <div className="upload-sec-show">
              <p className="upload-sec-show-text">Avatar</p>
              <div className="upload-sec-show-icon-wrapper">
                <FileUploadOutlinedIcon
                  sx={{ fontSize: "28px" }}
                  className="upload-sec-show-icon"
                />
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  className="upload-form-file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    formik.setFieldValue("avatar", file);
                  }}
                />
              </div>
            </div>
            {formik.touched.avatar && formik.errors.avatar ? (
              <p className="validation-error-text validation-error-upload">
                {formik.errors.avatar}
              </p>
            ) : (
              formik.values.avatar && (
                <p className="validation-success-text">
                  Selected file: <span>{formik.values.avatar.name}</span>
                </p>
              )
            )}
          </div>

          <div className="upload-sec">
            <div className="upload-sec-show">
              <p className="upload-sec-show-text">Cover Image</p>
              <div className="upload-sec-show-icon-wrapper">
                <FileUploadOutlinedIcon
                  sx={{ fontSize: "28px" }}
                  className="upload-sec-show-icon"
                />
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  className="upload-form-file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    formik.setFieldValue("coverImage", file);
                  }}
                />
              </div>
            </div>
            {formik.values.coverImage && (
              <p className="validation-success-text">
                Selected file: <span>{formik.values.coverImage.name}</span>
              </p>
            )}
          </div>

          <div className="login-signup-cancel-btns">
            <button
              type="submit"
              className="signup-btn"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <>
                  Signup <AutorenewRoundedIcon className="rotate" />
                </>
              ) : (
                "Signup"
              )}
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
