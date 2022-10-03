import { useAppSelector } from '@/store/hooks';
import ItemCart from './components/ItemCart';

const Cart = () => {
  const itemsCart = useAppSelector(state => state.cart.value);
  return (
    <>
      {itemsCart.map((item, index) => {
        return <ItemCart key={index} producto={item} />;
      })}
    </>
  );
};

export default Cart;
