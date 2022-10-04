import * as yup from 'yup';

const phoneRules = /3[0-9]{9}/gm;

export const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingresa un email valido')
    .required('Ingresa un e-mail'),
  username: yup
    .string()
    .min(3, 'El nombre de usuario debe tener minimo 3 caracteres')
    .required('Ingresa un nombre de usuario'),
  phone: yup
    .string()
    .matches(phoneRules, { message: 'Ingresa un numero de celular valido' })
    .required('Ingresa un numero de celular'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener minimo 8 caracteres')
    .matches(/[0-9]/, 'La contraseña requiere un numero')
    .matches(/[a-z]/, 'La contraseña requiere una letra minuscula')
    .matches(/[A-Z]/, 'La contraseña requiere una letra mayuscula')
    .matches(/[^\w]/, 'La contraseña requiere un simbolo')
    .required('Escribe una contraseña'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben ser iguales')
    .required('Confirma la contraseña'),
});
