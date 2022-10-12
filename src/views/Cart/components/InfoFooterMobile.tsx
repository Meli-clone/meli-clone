import { ProductCart } from '@/store/cart/cartSlice';
import { useState } from 'react';
import './InfoFooterMobile.scss';

interface Prop {
  producto: ProductCart;
}

const InfoFooterMobile = ({ producto }: Prop) => {
  const [quantity, setQuantity] = useState(1);
  const [isFull, setIsFull] = useState(false);

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addQuantity = () => {
    if (quantity < producto.quantity) {
      setQuantity(quantity + 1);
    } else {
      setIsFull(true);
    }
  };

  return (
    <div className='info-footer'>
      <div className='selector__container'>
        <div>
          <span onClick={subtractQuantity} className='icon'>
            -
          </span>
        </div>
        <div>
          <span>{quantity}</span>
        </div>
        <div>
          <span onClick={addQuantity} className='icon'>
            +
          </span>
        </div>
      </div>
      <div className='item__price'>
        <span className='price-tag'>${producto.price}</span>
      </div>
    </div>
  );
};

export default InfoFooterMobile;
