import * as Yup from "yup";

export const validationSchema = Yup.object({
  // Fullname validation
  fullname: Yup.string()
    .trim()
    .min(3, "Fullname must be at least 3 characters long")
    .required("Fullname is required"),

  // Email validation
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),

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

  // Avatar validation (required)
  avatar: Yup.mixed()
    .required("Avatar file is required")
    .test("fileSize", "File size should be less than 2MB", (value) => {
      return value && value.size <= 2 * 1024 * 1024; // 2MB limit
    })
    .test("fileType", "Only JPG or PNG files are allowed", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    }),

  // Cover Image validation (optional)
  coverImage: Yup.mixed()
    .nullable()
    .notRequired()
    .test("fileSize", "File size should be less than 5MB", (value) => {
      return !value || (value && value.size <= 5 * 1024 * 1024);
    })
    .test("fileType", "Only JPG or PNG files are allowed", (value) => {
      return (
        !value || (value && ["image/jpeg", "image/png"].includes(value.type))
      );
    }),
});
