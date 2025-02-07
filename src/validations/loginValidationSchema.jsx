import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  // Username validation
  username: Yup.string()
    .trim()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),

  // Password validation
  password: Yup.string()
    .trim()
    .matches(
      /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit or special character, and be at least 8 characters long"
    )
    .required("Password is required"),
});
