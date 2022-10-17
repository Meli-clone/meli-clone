import './CheckoutColumn.scss';
import { useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router-dom';

const CheckoutColumn = ({ shippingCost }: { shippingCost: number }) => {
  const carrito = useAppSelector(state => state.cart.value);
  const navigate = useNavigate();

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
              <p>$ {item.price}</p>
            </div>
            <div className='checkout_line'></div>
          </div>
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
  );
};

export default CheckoutColumn;
