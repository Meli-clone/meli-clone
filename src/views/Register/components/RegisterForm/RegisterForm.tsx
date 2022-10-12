import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import Swal from 'sweetalert2';
import { useAppDispatch } from '@/store/hooks';

//COMPONENTS AND FUNCTIONS
import { registerFormSchema } from './schemas/registerFormSchema';
import CustomInput from '@/views/components/CustomInput';
import { setUserInfo } from '@/store/user/user.slice';

//STYLES AND
import './RegisterForm.scss';

//ICONS
import { BsPersonBadge, BsTelephone } from 'react-icons/bs';
import { TbHelp } from 'react-icons/tb';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/Ai';

interface FormValues {
  email: string;
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showPassHelpDes, setShowPassHelpDes] = useState(false);

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
    const userInfo = {
      username: values.username,
      email: values.email,
      phone: values.phone,
      userLoggedIn: true,
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    dispatch(setUserInfo(userInfo));

    Swal.fire({
      icon: 'success',
      title: 'Usuario creado exitosamente',
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      navigate('/');
    }, 1600);
    formikBag.setSubmitting(false);
  };

  const showPassHelp = () => {
    setShowPassHelpDes(!showPassHelpDes);
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
                  <AiOutlineMail />
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
                  <button
                    type='button'
                    onClick={() => showPassHelp()}
                    className='pass_help'
                  >
                    <TbHelp className='pass_help__help_icon' />
                    <div
                      className={`pass_help__description ${
                        showPassHelpDes && 'show_des'
                      }`}
                    >
                      <p>La contraseña debe contener:</p>
                      <ul>
                        <li>- Mínimo 8 caracteres</li>
                        <li>- Mínimo un número</li>
                        <li>- Mínimo una letra minúscula</li>
                        <li>- Mínimo una letra mayúscula</li>
                        <li>{'- Mínimo un simbolo (!,",#,$,%,)'}</li>
                      </ul>
                    </div>
                  </button>

                  <CustomInput
                    label='Contraseña'
                    name='password'
                    type='password'
                    placeholder=''
                  />
                </li>
                <li>
                  <AiOutlineLock />

                  <CustomInput
                    label='Confirmar contraseña'
                    name='confirmPassword'
                    type='password'
                    placeholder=''
                  />
                </li>
              </ul>

              <button type='submit' className='form_submit'>
                Continuar
              </button>
            </Form>
          )}
        </Formik>
        <p className='login-link'>
          ¿Ya tienes una cuenta? <Link to='/login'>Inicia sesión</Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
