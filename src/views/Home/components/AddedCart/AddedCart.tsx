import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AddedCartInfo from './components/AddedCartInfo';

const AddedCart = () => {
  const location = useLocation();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (location.state) {
      setProduct(location.state.product[0]);
    }
  }, []);

  if (product) {
    return <AddedCartInfo product={product} />;
  }

  return <></>;
};

export default AddedCart;
