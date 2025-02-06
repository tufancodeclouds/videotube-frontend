import * as Yup from "yup";

export const validationSchema = Yup.object({
  fullname: Yup.string()
    .min(3, "Fullname must be at least 3 characters long.")
    .required("Fullname is required."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long.")
    .max(15, "Username must not exceed 15 characters.")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    )
    .required("Username is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    )
    .required("Password is required."),
  avatar: Yup.mixed()
    .required("Avatar is required.") // Avatar is required
    .test("fileSize", "File size should be less than 2MB", (value) => {
      return value && value.size <= 2 * 1024 * 1024; // 2MB limit
    })
    .test("fileType", "Only JPG or PNG files are allowed", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    }),
  coverImage: Yup.mixed()
    .nullable() // Allow null values
    .notRequired() // Make it optional
    .test("fileSize", "File size should be less than 5MB", (value) => {
      return !value || (value && value.size <= 5 * 1024 * 1024); // Cover Image is optional
    })
    .test("fileType", "Only JPG or PNG files are allowed", (value) => {
      return (
        !value || (value && ["image/jpeg", "image/png"].includes(value.type))
      );
    }),
});
