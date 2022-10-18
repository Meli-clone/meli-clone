import './CheckoutColumn.scss';
import { useNavigate } from 'react-router-dom';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import { useAppSelector } from '@/store/hooks';

const CheckoutColumn = () => {
  const carrito = useAppSelector(state => state.cart.value);
  const navigate = useNavigate();
  const shippingCost = useAppSelector(state => state.checkout.value.shipping);
  const total = useAppSelector(state => state.summary.price);
  console.log(total);

  if (carrito.length === 0) {
    navigate('/');
  }

  return (
    <div className='checkout_column1'>
      <p className='checkout_title'>Resumen de compra</p>
      <div className='checkout_line'></div>
      {carrito.map(item => {
        return (
          <div key={item.id}>
            <div className='checkout_div'>
              <img
                className='checkout_cartImage'
                src={item.image}
                alt={item.title}
              />
              <p className='checkout_cartTitle'>{item.title}</p>
              <p>$ {formatNumberWithDot(item.price * item.quantity)}</p>
            </div>
            <div className='checkout_line'></div>
          </div>
        );
      })}
      <div className='checkout_div'>
        <p>Envío</p>
        <p>$ {formatNumberWithDot(shippingCost)}</p>
      </div>
      <div className='checkout_line'></div>
      <div className='checkout_div'>
        <p>Total</p>
        <p>$ {formatNumberWithDot(total + shippingCost)}</p>
      </div>
    </div>
  );
};

export default CheckoutColumn;
