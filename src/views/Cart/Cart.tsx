import { useAppSelector } from '@/store/hooks';
import ItemCart from './components/ItemCart';
import Summary from './components/Summary';
import './cart.scss';

const Cart = () => {
  const itemsCart = useAppSelector(state => state.cart.value);
  console.log(itemsCart);

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
