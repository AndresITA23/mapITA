import * as Yup from "yup";

export function initialValues() {
  return {
    comment: "",
    rating: 3,
  };
}

export function validationSchema() {
  return Yup.object({
    comment: Yup.string().required("The comment is required"),
    rating: Yup.number().required("The rating is required"),
  });
}
