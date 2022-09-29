import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object({
  username: yup
    .string()
    .min(3, 'El usuario debe tener al menos 3 caracteres.')
    // .matches(/(JhonDoe)/, 'Usuario no encontrado')
    .required('Campo requerido'),
  password: yup
    .string()
    .min(5)
    // .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Campo requerido'),
});
