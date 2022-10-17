import './CheckoutForm.scss';
import { Formik, Form } from 'formik';
import { checkoutSchema } from './checkoutSchema';
import CustomInput from '@/components/CustomInput';
import CheckoutColumn from '../Column';

interface Prop {
  handleContinuar: (value: number) => void;
  shippingCost: number;
  CP: string;
}

interface FormValues {
  fullname: string;
  postcode: string;
  province: string;
  city: string;
  street: string;
  streetNumber: number;
  dpto: string;
}

const CheckoutForm = ({ handleContinuar, shippingCost, CP }: Prop) => {
  const initialValues: FormValues = {
    fullname: '',
    postcode: CP,
    province: '',
    city: '',
    street: '',
    streetNumber: 0,
    dpto: '',
  };

  const onSubmit = (values: FormValues) => {
    const userInfo = {
      fullname: values.fullname,
      postcode: values.postcode,
      province: values.province,
      city: values.city,
      street: values.street,
      streetNumber: values.streetNumber,
      dpto: values.dpto,
    };
    console.log(userInfo);
    handleContinuar(3);
  };

  return (
    <section className='checkoutForm'>
      <div className='checkoutForm_columns'>
        <CheckoutColumn shippingCost={shippingCost} />
        <div className='checkoutForm_Container'>
          <h1 className='checkoutForm_title'>Agrega un domicilio</h1>
          <div className='checkoutForm_formContainer'>
            <Formik
              initialValues={initialValues}
              validationSchema={checkoutSchema}
              onSubmit={onSubmit}
            >
              <Form className='form'>
                <div className='checkoutForm_form'>
                  <div className='checkoutForm_formDiv'>
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
                    <div className='checkoutForm_div'>
                      <div className='checkoutForm_inputContainer'>
                        <CustomInput
                          name='province'
                          placeholder=''
                          label='Provincia'
                          type='text'
                        />
                      </div>
                      <div className='checkoutForm_inputContainer checkoutForm_inputContainer_left'>
                        <CustomInput
                          name='city'
                          placeholder=''
                          label='Ciudad'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='checkoutForm_div'>
                      <div className='checkoutForm_inputContainer'>
                        <CustomInput
                          name='street'
                          placeholder=''
                          label='Calle/Avenida'
                          type='text'
                        />
                      </div>
                      <div className='checkoutForm_inputContainer checkoutForm_inputContainer_left'>
                        <CustomInput
                          name='streetNumber'
                          placeholder=''
                          label='Número'
                          type='number'
                        />
                      </div>
                    </div>
                    <div className='checkoutForm_inputContainer'>
                      <CustomInput
                        name='dpto'
                        placeholder=''
                        label='Piso/Departamento (opcional)'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='checkoutForm_buttonContainer'>
                    <button className='checkoutForm_button' type='submit'>
                      Continuar
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
