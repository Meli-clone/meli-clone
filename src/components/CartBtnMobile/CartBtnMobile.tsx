import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';

//ICONS
import { GiShoppingCart } from 'react-icons/gi';

//STYLES AND IMAGES
import './CartBtnMobile.scss';

const CartBtnMobile = () => {
  const carrito = useAppSelector(state => state.cart.value);

  const handleQuantityCart = () => {
    let total = 0;
    carrito.map(item => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className='cart_btn_mobile'>
      <Link to='/cart'>
        <GiShoppingCart />
      </Link>
      {carrito.length >= 1 && (
        <div className='cart_spanDiv'>
          <span className='cart_span'>{handleQuantityCart()}</span>
        </div>
      )}
    </div>
  );
};

export default CartBtnMobile;
