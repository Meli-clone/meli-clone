import { Formik, Form, FormikHelpers } from 'formik';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//COMPONENTS AND FUNCTIONS
import CustomInput from './components/CustomInput';
import { loginSchema } from './schemas/loginSchemas';

//STYLES AND IMAGES
import meliLogo2 from '@/assets/images/meli-logo2.svg';
import './Login.scss';

//ICONS
import { GiSmartphone } from 'react-icons/gi';
import { RiUser3Line } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const navigate = useNavigate();

  const onSubmit = (
    values: FormValues,
    formikBag: FormikHelpers<FormValues>,
  ) => {
    console.log({ values, formikBag });
    if (values.username !== 'john' || values.password !== '12345') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales invalidas 🤔',
        footer: '<a href="">Has olvidado la contraseña?</a>',
      });
    } else {
      localStorage.setItem('username', values.username);
      formikBag.setSubmitting(false);
      navigate('/');
    }
  };

  return (
    <div className='login'>
      <header className='login_header'>
        <Link to='/' className='login_header__logo'>
          <img src={meliLogo2}></img>
        </Link>
      </header>
      <div className='main_container'>
        <div className='main_container__main_card'>
          <h1>¡Hola! Ingresa tu teléfono, e-mail o usuario</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
            className='main_card__login_form'
          >
            {({ isSubmitting }) => (
              <Form>
                <CustomInput
                  label='Teléfono, e-mail o usuario'
                  name='username'
                  type='text'
                  placeholder=''
                />

                <CustomInput
                  label='Contraseña'
                  name='password'
                  type='text'
                  placeholder=''
                />

                <button type='submit' disabled={isSubmitting}>
                  Continuar
                </button>
              </Form>
            )}
          </Formik>
          <div className='main_container__main_card__registration_link'>
            <Link to='#'>Crear cuenta</Link>
          </div>
          <div className='main_container__main_card__help_link'>
            <Link to='#'>Necesito ayuda para ingresar</Link>
          </div>
        </div>
        <div className='main_container__security_issues'>
          <p>Reportar un problema</p>
          <ul>
            <li>
              <div>
                <GiSmartphone />
                Robo o pérdida de teléfono
              </div>
              <MdOutlineKeyboardArrowRight />
            </li>
            <li>
              <div>
                <RiUser3Line />
                Robo de cuenta
              </div>
              <MdOutlineKeyboardArrowRight />
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <Link to='#'>Cómo cuidamos tu privacidad</Link>
        <p>Copyright © 1999-2022 MercadoLibre Colombia LTDA.</p>
      </footer>
    </div>
  );
};

export default Login;
