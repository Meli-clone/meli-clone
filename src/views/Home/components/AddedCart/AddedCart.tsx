import { useState, useEffect } from 'react';
/* Redux */
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart } from '@/store/cart/cartSlice';
import { addSummary } from '@/store/summary/summarySlice';

import AddedCartInfo from './components/AddedCartInfo';

const AddedCart = () => {
  const [product, setProduct] = useState();
  const dispatch = useAppDispatch();

  const { userLoggedIn } = useAppSelector(state => state.user.userInfo);

  useEffect(() => {
    const productToCart = JSON.parse(
      localStorage.getItem('productToCart') ?? 'null',
    );
    if (userLoggedIn && productToCart) {
      setProduct(productToCart);
      dispatch(addToCart(productToCart));
      dispatch(
        addSummary({
          price: productToCart.price,
          quantity: productToCart.quantity,
        }),
      );
    }

    localStorage.removeItem('productToCart');
  }, []);

  if (product) {
    return <AddedCartInfo product={product} />;
  }

  return <></>;
};

export default AddedCart;
