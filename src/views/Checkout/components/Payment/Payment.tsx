import './Payment.scss';
import { useState } from 'react';
import CheckoutColumn from '../Column';

interface Prop {
  handleContinuar: (value: number) => void;
  shippingCost: number;
}

const Payment = ({ handleContinuar, shippingCost }: Prop) => {
  const [clicked, setClicked] = useState<string>('credito');

  return (
    <section className='checkoutPayment'>
      <div className='checkoutPayment_container'>
        <CheckoutColumn shippingCost={shippingCost} />
        <div className='checkout_column2'>
          <h1 className='checkout_title'>
            ¿Cómo querés recibir o retirar tu compra?
          </h1>

          <p>Con débito o crédito</p>
          <div
            className='checkout_detailContainer'
            onClick={() => {
              setClicked('credito');
            }}
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  clicked == 'credito'
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
              <p className='checkout_selectTitle'>Tarjeta de débito</p>
            </div>
          </div>
          <div
            className='checkout_detailContainer checkout_detailContainer_second'
            onClick={() => {
              setClicked('debito');
            }}
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  clicked == 'debito'
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
              <p className='checkout_selectTitle'>Tarjeta de crédito</p>
            </div>
          </div>

          <p>Con otras formas de pago</p>
          <div
            className='checkout_detailContainer'
            onClick={() => {
              setClicked('otro');
            }}
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  clicked == 'otro'
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
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
