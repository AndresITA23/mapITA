import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("The email is invalid")
      .required("The email is required"),
    password: Yup.string().required("Please enter a password"),
  });
}
