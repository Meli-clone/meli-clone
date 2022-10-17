import { useAppSelector } from '@/store/hooks';
import Summary from './components/Summary';
import ItemCart from './components/ItemCart';
import './cart.scss';

const Cart = () => {
  const itemsCart = useAppSelector(state => state.cart.value);
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
