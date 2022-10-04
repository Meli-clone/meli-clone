import { useNavigate } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';

//COMPONENTS AND FUNCTIONS
import { registerFormSchema } from './schemas/registerFormSchema';
import CustomInput from '@/views/components/CustomInput';

//STYLES AND
import './RegisterForm.scss';

//ICONS
import { MdMailOutline } from 'react-icons/md';
import { BsPersonBadge, BsTelephone } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';

interface FormValues {
  email: string;
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();

  const initialValues: FormValues = {
    email: '',
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = (
    values: FormValues,
    formikBag: FormikHelpers<FormValues>,
  ) => {
    console.log({ values, formikBag });
    navigate('/');
    formikBag.setSubmitting(false);
  };

  return (
    <div className='register_form'>
      <div className='register_form__main_card'>
        <h1>Tus datos</h1>
        <p>
          Valida tus datos para que nadie pueda ingresar o crear una cuenta a tu
          nombre
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={registerFormSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form>
              <ul>
                <li>
                  <MdMailOutline />
                  <CustomInput
                    label='Email'
                    name='email'
                    type='email'
                    placeholder=''
                  />
                </li>
                <li>
                  <BsPersonBadge />
                  <CustomInput
                    label='Nombre de usuario'
                    name='username'
                    type='text'
                    placeholder=''
                  />
                </li>
                <li>
                  <BsTelephone />
                  <CustomInput
                    label='Télefono'
                    type='text'
                    name='phone'
                    placeholder=''
                  />
                </li>
                <li>
                  <AiOutlineLock />
                  <CustomInput
                    label='Contraseña'
                    name='password'
                    type='password'
                    placeholder=''
                  />
                </li>
                <li>
                  {/* <GiPadlock /> */}
                  <CustomInput
                    label='Confirmar contraseña'
                    name='confirmPassword'
                    type='password'
                    placeholder=''
                  />
                </li>
              </ul>

              <button type='submit'>Continuar</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
