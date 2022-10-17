import './CheckoutInitial.scss';
import { ChangeEvent } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import CheckoutColumn from '../Column';

interface Prop {
  handleContinuar: (value: number) => void;
  handleShipping: (value: number) => void;
  shippingCost: number;
  handleAddress: () => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  CP: {
    clicked: boolean;
    CP: string;
  };
}

const CheckoutInitial = ({
  handleContinuar,
  handleShipping,
  shippingCost,
  handleAddress,
  handleInput,
  CP,
}: Prop) => {
  return (
    <section className='checkoutContainer'>
      <div className='checkout'>
        <CheckoutColumn shippingCost={shippingCost} />
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
                {CP.clicked ? (
                  <input
                    type='number'
                    className='checkout_selectInput'
                    placeholder='Tu Código Postal'
                    value={CP.CP}
                    min='4'
                    max='4'
                    onChange={handleInput}
                  />
                ) : (
                  <p className='checkout_selectTitle'>
                    C.P. {CP.CP ? CP.CP : 1627}
                  </p>
                )}
              </div>
            </div>
            <a className='checkout_edit' onClick={handleAddress}>
              {CP.clicked ? 'Aceptar' : 'Editar'}
            </a>
          </div>

          <p>Recibir compra</p>
          <div
            className='checkout_detailContainer'
            onClick={() => handleShipping(1235)}
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
                <p className='checkout_selectTitle'>Llega el miércoles</p>
              </div>
            </div>
            <p className='checkout_shippingTotal'>$ 1.235</p>
          </div>
          <p>Retirar compra</p>

          <div
            className='checkout_detailContainer'
            onClick={() => handleShipping(936)}
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
