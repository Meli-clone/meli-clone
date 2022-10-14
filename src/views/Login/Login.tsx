import { Formik, Form, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch } from '@/store/hooks';

//COMPONENTS AND FUNCTIONS
import CustomInput from './components/CustomInput';
import { loginSchema } from './schemas/loginSchemas';
import { setUserInfo } from '@/store/user/user.slice';
import { signInWithGoogle } from '@/services/firebase';

//STYLES AND IMAGES
import './Login.scss';

//ICONS
import { GiSmartphone } from 'react-icons/gi';
import { RiUser3Line } from 'react-icons/ri';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import MinimalHeader from '../components/MinimalHeader';

interface FormValues {
  username: string;
  password: string;
}

const jhonInfo = {
  userLoggedIn: true,
  username: 'Jhon',
  phone: '3000000000',
  email: 'jhon@gmail.com',
};

const Login = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (
    values: FormValues,
    formikBag: FormikHelpers<FormValues>,
  ) => {
    if (values.username !== 'jhon' || values.password !== '12345') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales invalidas 🤔',
        footer: '<a href="">Has olvidado la contraseña?</a>',
      });
    } else {
      localStorage.setItem('userInfo', JSON.stringify(jhonInfo));
      dispatch(setUserInfo(jhonInfo));
      navigate('/');
    }
    formikBag.setSubmitting(false);
  };

  const singInWithGoogleHandler = async () => {
    try {
      const { displayName, email, phoneNumber, photoURL } =
        await signInWithGoogle();

      const userInfo = {
        userLoggedIn: true,
        username: displayName ?? '',
        phone: phoneNumber ?? '',
        email: email ?? '',
        userImage: photoURL ?? '',
      };

      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      dispatch(setUserInfo(userInfo));

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <MinimalHeader />
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
                  type='password'
                  placeholder=''
                />

                <button type='submit' disabled={isSubmitting}>
                  Continuar
                </button>
              </Form>
            )}
          </Formik>
          <div className='main_container__main_card__registration_link'>
            <Link to='/register'>Crear una cuenta</Link>
          </div>
          <div className='main_container__main_card__login-with-google-btn'>
            <p>o</p>
            <br></br>
            <button onClick={singInWithGoogleHandler}>
              Ingresa con Google
            </button>
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
