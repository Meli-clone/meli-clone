import { useAppSelector } from '@/store/hooks';
import ItemCart from './components/ItemCart';
import Summary from './components/Summary';

const Cart = () => {
  const itemsCart = useAppSelector(state => state.cart.value);

  return (
    <>
      {itemsCart.map((item, index) => {
        return <ItemCart key={index} producto={item} />;
      })}
      <Summary />
    </>
  );
};

export default Cart;
