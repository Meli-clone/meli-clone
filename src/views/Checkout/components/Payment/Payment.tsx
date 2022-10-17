import './Payment.scss';
import CheckoutColumn from '../Column';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addPaymentMethod } from '@/store/checkout/checkoutSlice';
import { BsCash } from 'react-icons/bs';
import { BsCreditCard2Back, BsCreditCard2Front } from 'react-icons/bs';

interface Prop {
  handleContinuar: (value: number) => void;
}

const Payment = ({ handleContinuar }: Prop) => {
  const dispatch = useAppDispatch();
  const clicked = useAppSelector(state => state.checkout.value.paymentMethod);

  const handlePayment = (value: string) => {
    dispatch(addPaymentMethod(value));
  };

  return (
    <section className='checkoutPayment'>
      <div className='checkoutPayment_container'>
        <CheckoutColumn />
        <div className='checkout_column2'>
          <h1 className='checkout_title'>
            ¿Cómo querés recibir o retirar tu compra?
          </h1>

          <p>Con débito o crédito</p>
          <div
            className='checkout_detailContainer'
            onClick={() => {
              handlePayment('Tarjeta de débito');
            }}
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  clicked == 'Tarjeta de débito'
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
              <div className='checkout_iconContainer'>
                <BsCreditCard2Front className='checkout_icon' />
              </div>
              <p className='checkout_selectTitle'>Tarjeta de débito</p>
            </div>
          </div>

          <div
            className='checkout_detailContainer checkout_detailContainer_second'
            onClick={() => {
              handlePayment('Tarjeta de crédito');
            }}
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  clicked == 'Tarjeta de crédito'
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
              <div className='checkout_iconContainer'>
                <BsCreditCard2Back className='checkout_icon' />
              </div>
              <p className='checkout_selectTitle'>Tarjeta de crédito</p>
            </div>
          </div>

          <p>Con otras formas de pago</p>
          <div
            className='checkout_detailContainer'
            onClick={() => {
              handlePayment('Efectivo en puntos de pago');
            }}
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  clicked == 'Efectivo en puntos de pago'
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
              <div className='checkout_iconContainer'>
                <BsCash className='checkout_icon' />
              </div>
              <p className='checkout_selectTitle'>Efectivo en puntos de pago</p>
            </div>
          </div>

          <div className='checkout_buttonContainer'>
            <button
              className='checkout_button'
              onClick={() => handleContinuar(4)}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
