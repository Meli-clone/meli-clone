import { useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import Summary from './components/Summary';
import ItemCart from './components/ItemCart';
import './Cart.scss';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const itemsCart = useAppSelector(state => state.cart.value);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Carrito de compras';
  }, []);

  if (itemsCart.length === 0) {
    return (
      <section className='emptyCart'>
        <div className='emptyCart_div'>
          <h1 className='emptyCart_title'> Tu carrito está vacío </h1>
          <button onClick={() => navigate('/')} className='emptyCart_button'>
            ¡Comprar!
          </button>
        </div>
      </section>
    );
  }
  return (
    <div className='cart'>
      {itemsCart.map((item, index) => {
        return <ItemCart key={index} product={item} />;
      })}
      <Summary />
    </div>
  );
};

export default Cart;
