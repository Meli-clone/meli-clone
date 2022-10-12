import './CheckoutForm.scss';
import { Formik, Form, FormikHelpers } from 'formik';
import { checkoutSchema } from './checkoutSchema';
import CustomInput from '@/views/components/CustomInput';

interface Prop {
  handleContinuar: (value: number) => void;
}

interface FormValues {
  email: string;
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const CheckoutForm = ({ handleContinuar }: Prop) => {
  const initialValues: FormValues = {
    email: '',
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = () => {
    console.log('Enviado');
  };

  return (
    <section className='checkoutForm'>
      <div className='checkoutForm_Container'>
        <h1 className='checkoutForm_title'>Agrega un domicilio</h1>
        <div className='checkoutForm_form'>
          <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className='checkoutForm_inputContainer'>
                <CustomInput
                  name='fullname'
                  placeholder=''
                  label='Nombre y apellido'
                  type='text'
                />
              </div>
              <div className='checkoutForm_inputContainer'>
                <CustomInput
                  name='postcode'
                  placeholder=''
                  label='Código Postal'
                  type='number'
                />
              </div>
              <div className='checkoutForm_inputContainer'>
                <CustomInput
                  name='province'
                  placeholder=''
                  label='Provincia'
                  type='text'
                />
              </div>
              <div className='checkoutForm_inputContainer'>
                <CustomInput
                  name='city'
                  placeholder=''
                  label='Ciudad'
                  type='text'
                />
              </div>
              <div className='checkoutForm_inputContainer'>
                <CustomInput
                  name='street'
                  placeholder=''
                  label='Calle/Avenida'
                  type='text'
                />
              </div>
              <div className='checkoutForm_inputContainer'>
                <CustomInput
                  name='streetNumber'
                  placeholder=''
                  label='Número'
                  type='number'
                />
              </div>
              <div className='checkoutForm_inputContainer'>
                <CustomInput
                  name='dpto'
                  placeholder=''
                  label='Piso/Departamento (opcional)'
                  type='text'
                />
              </div>
            </Form>
          </Formik>
        </div>
        <div className='checkoutForm_buttonContainer'>
          <button
            className='checkoutForm_button'
            onClick={() => handleContinuar(3)}
          >
            Continuar
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
