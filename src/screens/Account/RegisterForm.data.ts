import * as Yup from 'yup';

export function initialValues() {
    return {
        email: "",
        password: "",
        repeatPassword: "",
        isAdmin: "false",
    }
}

export function validationSchema() {
    const getCharacterValidationError = (str: string) => {
        return `Your password must have at least 1 ${str} character`;
      };

    return Yup.object({
        email: Yup.string().email("The email is invalid").required("The email is required"),
        password: Yup.string().required("Please enter a password")
        .min(8, "Password must have at least 8 characters")
        // different error messages for different requirements
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
        repeatPassword: Yup.string().required("Please re-type your password").oneOf([Yup.ref("password")], "The password have to be the same"),

    })
}