import './CheckoutInitial.scss';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import CheckoutColumn from '../Column';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addCP,
  addShippingCost,
  addShippingType,
} from '@/store/checkout/checkoutSlice';

interface Prop {
  handleContinuar: (value: number) => void;
}

const CheckoutInitial = ({ handleContinuar }: Prop) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cp = useAppSelector(state => state.checkout.value.user.CP);
  const shippingCost = useAppSelector(state => state.checkout.value.shipping);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addCP(Number(e.target.value)));
  };

  const handleShipping = (value: number, type: string) => {
    dispatch(addShippingCost(value));
    dispatch(addShippingType(type));
  };

  return (
    <section className='checkoutContainer'>
      <div className='checkout'>
        <CheckoutColumn />
        <div className='checkout_column2'>
          <h1 className='checkout_title'>
            ¿Cómo querés recibir o retirar tu compra?
          </h1>

          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <IoLocationOutline className='checkout_icon' />
              </div>
              <div className='checkout_selectDiv'>
                {clicked ? (
                  <input
                    type='number'
                    className='checkout_selectInput'
                    placeholder='Tu Código Postal'
                    value={cp}
                    min='4'
                    max='4'
                    onChange={handleInput}
                  />
                ) : (
                  <p className='checkout_selectTitle'>C.P. {cp}</p>
                )}
              </div>
            </div>
            <a className='checkout_edit' onClick={() => setClicked(!clicked)}>
              {clicked ? 'Aceptar' : 'Editar'}
            </a>
          </div>

          <p>Recibir compra</p>
          <div
            className='checkout_detailContainer'
            onClick={() => handleShipping(1235, 'Envío a tu domicilio')}
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  shippingCost == 1235
                    ? 'checkout_selectLine'
                    : 'checkout_selectLine checkout_selectLine_disabled'
                }
              ></div>
              <div
                className={
                  shippingCost == 1235
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
              <div className='checkout_selectDiv'>
                <p className='checkout_selectTitle'>
                  Llega el miércoles a tu casa
                </p>
              </div>
            </div>
            <p className='checkout_shippingTotal'>$ 1.235</p>
          </div>
          <p>Retirar compra</p>

          <div
            className='checkout_detailContainer'
            onClick={() =>
              handleShipping(936, 'Retiro en correo y otros puntos')
            }
          >
            <div className='checkout_detailInnerContainer'>
              <div
                className={
                  shippingCost == 936
                    ? 'checkout_selectLine'
                    : 'checkout_selectLine checkout_selectLine_disabled'
                }
              ></div>
              <div
                className={
                  shippingCost == 936
                    ? 'checkout_selectCircle'
                    : 'checkout_selectCircle checkout_selectCircle_disabled'
                }
              ></div>
              <div className='checkout_selectDiv'>
                <p className='checkout_selectTitle'>
                  Retiro en correo y otros puntos
                </p>
                <p className='checkout_selectSubtitle'>
                  Llega entre el Miércoles y el Jueves
                </p>
              </div>
            </div>
            <p className='checkout_shippingTotal'>$ 936</p>
          </div>

          <div className='checkout_buttonContainer'>
            <button
              className='checkout_button'
              onClick={() => handleContinuar(2)}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutInitial;
