import * as yup from 'yup';

export const checkoutSchema = yup.object().shape({
  fullname: yup
    .string()
    .required('Ingresa tu nombre y apellido'),
  postcode: yup
    .number()
    .min(4, 'El código postal debe tener un mínimo de 3 caracteres')
    .required('Ingresa tu código postal'),
  province: yup
    .string()
    .required('Ingresa la provincia en donde vives'),
  city: yup
    .string()
    .required('Ingresa la ciudad en donde vives'),
  street: yup
    .string()
    .required('Ingresa la calle en donde vives'),
  streetNumber: yup
    .number()
    .required('Ingresa el número de la calle en donde vives'),
  dpto: yup
    .string()
});
