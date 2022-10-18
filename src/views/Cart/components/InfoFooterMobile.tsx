import { ProductCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { substractSummary, sumSummary } from '@/store/summary/summarySlice';
import { useState } from 'react';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import './InfoFooterMobile.scss';

interface Prop {
  product: ProductCart;
}

const InfoFooterMobile = ({ product }: Prop) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  const [isFull, setIsFull] = useState(false);

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(substractSummary(product.price));
    }
  };

  const addQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
      dispatch(sumSummary(product.price));
    } else {
      setIsFull(true);
    }
  };

  return (
    <div className='info-footer'>
      <div className='selector__container'>
        <div>
          <span
            onClick={subtractQuantity}
            className={quantity > 1 ? 'icon' : 'icon iconDisabled'}
          >
            -
          </span>
        </div>
        <div>
          <span>{quantity}</span>
        </div>
        <div>
          <span
            onClick={addQuantity}
            className={quantity > 1 ? 'icon' : 'icon iconDisabled'}
          >
            +
          </span>
        </div>
      </div>
      <div className='item__price'>
        <span className='price-tag'>
          ${formatNumberWithDot(product.price * quantity)}
        </span>
      </div>
    </div>
  );
};

export default InfoFooterMobile;
