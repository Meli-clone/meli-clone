import { ProductCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { substractSummary, sumSummary } from '@/store/summary/summarySlice';
import { useState } from 'react';
import './InfoFooterMobile.scss';

interface Prop {
  producto: ProductCart;
}

const InfoFooterMobile = ({ producto }: Prop) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(producto.quantity);
  const [isFull, setIsFull] = useState(false);

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(substractSummary(producto.price));
    }
  };

  const addQuantity = () => {
    if (quantity < producto.stock) {
      setQuantity(quantity + 1);
      dispatch(sumSummary(producto.price));
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
        <span className='price-tag'>
          ${(producto.price * quantity).toFixed(3)}
        </span>
      </div>
    </div>
  );
};

export default InfoFooterMobile;
