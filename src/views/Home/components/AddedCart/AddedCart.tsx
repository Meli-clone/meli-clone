import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AddedCartInfo from './components/AddedCartInfo';

const AddedCart = () => {
  const location = useLocation();
  const [product, setProduct] = useState();

  const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

  const productToCart = JSON.parse(
    localStorage.getItem('productToCart') ?? 'null',
  );

  useEffect(() => {
    if (userInfo) {
      if (location.state) {
        setProduct(location.state.product[0]);
      }

      if (productToCart) {
        setProduct(productToCart);
        localStorage.removeItem('productToCart');
      }
    } else {
      localStorage.removeItem('productToCart');
    }
  }, []);

  if (product) {
    return <AddedCartInfo product={product} />;
  }

  return <></>;
};

export default AddedCart;
