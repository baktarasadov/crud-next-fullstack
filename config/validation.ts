import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email")
    .min(14, "Email must be at least 14 characters long")
    .required("Required"),
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  surname: yup
    .string()
    .min(5, "Username must be at least 5 characters long")
    .required("Required"),
  age: yup
    .number()
    .required("Required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
});