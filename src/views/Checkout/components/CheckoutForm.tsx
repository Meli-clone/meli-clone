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
    <section className='checkoutContainer'>
      <h1>Agrega un domicilio</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CustomInput
            name='Hola'
            placeholder='hola'
            label='hola'
            type='text'
          />
        </Form>
      </Formik>

      <button onClick={() => handleContinuar(2)}></button>
    </section>
  );
};

export default CheckoutForm;
