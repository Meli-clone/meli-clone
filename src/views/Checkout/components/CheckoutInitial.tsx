import './CheckoutInitial.scss';
import { useState, ChangeEvent } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store/hooks';

interface Prop {
  handleContinuar: (value: number) => void;
}

const CheckoutInitial = ({ handleContinuar }: Prop) => {
  const carrito = useAppSelector(state => state.cart.value);
  const [shippingCost, setShippingCost] = useState<number>(936);
  const [CP, setCP] = useState({
    clicked: false,
    CP: '',
  });

  const handleAddress = () => {
    setCP({
      clicked: !CP.clicked,
      CP: CP.CP,
    });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCP({
      clicked: CP.clicked,
      CP: e.target.value,
    });
  };

  const handleShipping = (value: number) => {
    setShippingCost(value);
  };

  return (
    <section className='checkoutContainer'>
      <div className='checkout'>
        <div className='checkout_column1'>
          <p className='checkout_title'>Resumen de compra</p>
          <div className='checkout_line'></div>
          {carrito.map(item => {
            return (
              <>
                <div key={item.id} className='checkout_div'>
                  <img
                    className='checkout_cartImage'
                    src={item.image}
                    alt={item.title}
                  />
                  <p className='checkout_cartTitle'>{item.title}</p>
                  <p>$ {item.price}</p>
                </div>
                <div className='checkout_line'></div>
              </>
            );
          })}
          <div className='checkout_div'>
            <p>Envío</p>
            <p>$ {shippingCost}</p>
          </div>
          <div className='checkout_line'></div>
          <div className='checkout_div'>
            <p>Total</p>
            <p>$ {shippingCost + 1253}</p>
            {/* Modificar precio acá */}
          </div>
        </div>
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
