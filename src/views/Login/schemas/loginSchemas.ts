import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup
    .string()
    .min(3, 'El usuario debe tener al menos 3 caracteres.')
    .required('Campo requerido'),
  password: yup
    .string()
    .min(5, 'La contraseña debe tener minimo 5 caracteres')
    .required('Campo requerido'),
});
