import './Summary.scss';
import CheckoutColumn from '../Column';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTruck, BsCreditCard2Back } from 'react-icons/bs';
import { RiBillLine } from 'react-icons/ri';

interface Prop {
  shippingCost: number;
}

const Summary = ({ shippingCost }: Prop) => {
  const handleSubmit = () => {
    console.log('submited');
  };

  return (
    <section className='checkoutSummary'>
      <div className='checkoutSummary_container'>
        <CheckoutColumn shippingCost={shippingCost} />
        <div className='checkout_column2'>
          <h1 className='checkout_title'>Revisa y confirma tu compra</h1>

          <p>Detalles de la entrega</p>

          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <IoLocationOutline className='checkout_icon' />
              </div>
              <p className='checkout_info'>Calle siempre vivas</p>
            </div>
            <a className='checkout_edit'>Editar o elegir otro</a>
          </div>
          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <BsTruck className='checkout_icon' />
              </div>
              <p className='checkout_info'>Llega el Lunes</p>
            </div>
            <a className='checkout_edit'>Modificar método de entrega</a>
          </div>

          <p>Detalles del pago</p>

          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <BsCreditCard2Back className='checkout_icon' />
              </div>
              <p className='checkout_info'>Tarjeta de crédito</p>
            </div>
            <a className='checkout_edit'>Modificar</a>
          </div>
          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <RiBillLine className='checkout_icon' />
              </div>
              <p className='checkout_info'>Datos para tu factura</p>
            </div>
            <a className='checkout_edit'>Modificar datos</a>
          </div>

          <div className='checkout_buttonContainer'>
            <button className='checkout_button' onClick={handleSubmit}>
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
