import './Checkout.scss';
import { IoLocationOutline } from 'react-icons/io5';

const Checkout = () => {
  return (
    <section className='checkoutContainer'>
      <div className='checkout'>
        <div className='checkout_column1'>
          <p className='checkout_title'>Resumen de compra</p>
          <div className='checkout_line'></div>
          <div className='checkout_div'>
            <p>Producto</p>
            <p>$3.256</p>
          </div>
          <div className='checkout_div'>
            <p>Envío</p>
            <p>$936</p>
          </div>
          <div className='checkout_line'></div>
          <div className='checkout_div'>
            <p>Total</p>
            <p>$24.563</p>
          </div>
        </div>
        <div className='checkout_column2'>
          <h1 className='checkout_title'>Opciones de envío a</h1>

          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <IoLocationOutline className='checkout_icon' />
              </div>
              <div className='checkout_selectDiv'>
                <p className='checkout_selectTitle'>San Agustín 12</p>
                <p className='checkout_selectSubtitle'>
                  C.P. 1625 - Escobar, Buenos Aires
                </p>
                <p className='checkout_selectSubtitle'>
                  Lucia Dias - 011 69679769
                </p>
              </div>
            </div>
            <a className='checkout_edit'>Editar</a>
          </div>

          <p>Recibir compra</p>
          <div className='checkout_detailContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_selectLine'></div>
              <div className='checkout_selectCircle'></div>
              <div className='checkout_selectDiv'>
                <p className='checkout_selectTitle'>Llega el miércoles</p>
              </div>
            </div>
            <p className='checkout_shippingTotal'>$ 1.235</p>
          </div>
          <p>Retirar compra</p>
          <div className='checkout_detailContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_selectLine'></div>
              <div className='checkout_selectCircle'></div>
              <div className='checkout_selectDiv'>
                <p className='checkout_selectTitle'>
                  Retiro en correo y otros puntos
                </p>
                <p className='checkout_selectSubtitle'>
                  Llega entre el Miércoles y el Jueves
                </p>
              </div>
            </div>
            <p className='checkout_shippingTotal'>$ 925</p>
          </div>
          <div className='checkout_buttonContainer'>
            <button className='checkout_button'>Continuar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
