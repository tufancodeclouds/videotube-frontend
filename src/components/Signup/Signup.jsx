import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { signupValidationSchema } from "../../validations/signupValidationSchema";
import useApiCall from "../../hooks/useApiCall";
import "./Signup.css";

const Signup = ({ setSignup, setLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { apiCall, isLoading } = useApiCall();

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
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (values[key]) formData.append(key, values[key]);
      });

      try {
        const response = await apiCall("/users/register", "POST", formData);
        // toast.success(response.message);

        resetForm();
        setSignup(false);
      } catch (error) {}
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
          {/* Fullname Input */}
          <input
            type="text"
            placeholder="Fullname"
            className="signup-form-input"
            name="fullname"
            {...formik.getFieldProps("fullname")}
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <p className="validation-error-text">{formik.errors.fullname}</p>
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="signup-form-input"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="validation-error-text">{formik.errors.email}</p>
          )}

          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            className="signup-form-input"
            name="username"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="validation-error-text">{formik.errors.username}</p>
          )}

          {/* Password Input */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="signup-form-input"
              name="password"
              {...formik.getFieldProps("password")}
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

          {/* Avatar Upload */}
          <div className="upload-sec">
            <div className="upload-sec-show">
              <p className="upload-sec-show-text">Avatar</p>
              <div className="upload-sec-show-icon-wrapper">
                <FileUploadOutlinedIcon sx={{ fontSize: "28px" }} />
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  className="upload-form-file"
                  onChange={(e) =>
                    formik.setFieldValue("avatar", e.target.files?.[0])
                  }
                />
              </div>
            </div>
            {formik.values.avatar && (
              <p className="validation-success-text">
                Selected file: <span>{formik.values.avatar.name}</span>
              </p>
            )}
          </div>

          {/* Cover Image Upload */}
          <div className="upload-sec">
            <div className="upload-sec-show">
              <p className="upload-sec-show-text">Cover Image</p>
              <div className="upload-sec-show-icon-wrapper">
                <FileUploadOutlinedIcon sx={{ fontSize: "28px" }} />
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  className="upload-form-file"
                  onChange={(e) =>
                    formik.setFieldValue("coverImage", e.target.files?.[0])
                  }
                />
              </div>
            </div>
            {formik.values.coverImage && (
              <p className="validation-success-text">
                Selected file: <span>{formik.values.coverImage.name}</span>
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="login-signup-cancel-btns">
            <button type="submit" className="signup-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  Signing up <AutorenewRoundedIcon className="rotate" />
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
