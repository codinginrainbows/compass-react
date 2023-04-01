import * as yup from "yup";

export const SignInValidationSchema = yup.object({
    user: yup
    .string()
    .required('Preencha o nome')
    .matches(
      /^admin$/,
      ""
    ),
    password: yup
    .string()
    .required('Preencha a senha')
    .matches(
      /^admin$/,
      ""
    ),
}).required();