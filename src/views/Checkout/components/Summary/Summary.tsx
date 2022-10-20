import './Summary.scss';
import CheckoutColumn from '../Column';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTruck, BsCreditCard2Back } from 'react-icons/bs';
import { RiBillLine } from 'react-icons/ri';
import { useAppSelector } from '@/store/hooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hooks';
import { deleteAllSummary } from '@/store/summary/summarySlice';
import { deleteAll } from '@/store/cart/cartSlice';

const Summary = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { fullname, street, streetNumber } = useAppSelector(
    state => state.checkout.value.user,
  );
  const { paymentMethod, shippingType } = useAppSelector(
    state => state.checkout.value,
  );

  const handleSubmit = () => {
    Swal.fire({
      icon: 'success',
      title: 'Tu pedido ha sido enviado',
      showConfirmButton: false,
      timer: 2000,
    });
    dispatch(deleteAllSummary());
    dispatch(deleteAll());
    setTimeout(() => {
      navigate('/');
    }, 2100);
  };

  return (
    <section className='checkoutSummary'>
      <div className='checkoutSummary_container'>
        <CheckoutColumn />
        <div className='checkout_column2'>
          <h1 className='checkout_title'>Revisa y confirma tu compra</h1>

          <p>Detalles de la entrega</p>
          {shippingType == 'Envío a tu domicilio' && (
            <div className='checkout_addressContainer checkout_detailContainer_seconds'>
              <div className='checkout_detailInnerContainer'>
                <div className='checkout_iconContainer'>
                  <IoLocationOutline className='checkout_icon' />
                </div>
                <p className='checkout_info'>
                  {street} {streetNumber}
                </p>
              </div>
              <a className='checkout_edit'>Editar o elegir otro</a>
            </div>
          )}
          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <BsTruck className='checkout_icon' />
              </div>
              <p className='checkout_info'>{shippingType}</p>
            </div>
            <a className='checkout_edit'>Modificar método de entrega</a>
          </div>

          <p>Detalles del pago</p>

          <div className='checkout_addressContainer'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <BsCreditCard2Back className='checkout_icon' />
              </div>
              <p className='checkout_info'>{paymentMethod}</p>
            </div>
            <a className='checkout_edit'>Modificar</a>
          </div>
          <div className='checkout_addressContainer checkout_detailContainer_second'>
            <div className='checkout_detailInnerContainer'>
              <div className='checkout_iconContainer'>
                <RiBillLine className='checkout_icon' />
              </div>
              <div className='checkout_infoDiv'>
                <p className='checkout_info'>Datos para tu factura: </p>
                <p className='checkout_info_gray'>{fullname}</p>
              </div>
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
