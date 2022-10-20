import {
  ProductCart,
  substractQuantity,
  sumQuantity,
} from '@/store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { substractSummary, sumSummary } from '@/store/summary/summarySlice';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import './InfoFooterMobile.scss';

interface Prop {
  product: ProductCart;
}

const InfoFooterMobile = ({ product }: Prop) => {
  const dispatch = useAppDispatch();
  const currentProduct = useAppSelector(state =>
    state.cart.value.find(item => item.id === product.id),
  );

  const subtractQuantity = () => {
    if (currentProduct) {
      if (currentProduct.quantity > 1) {
        dispatch(substractQuantity(currentProduct));
        dispatch(substractSummary(product.price));
      }
    }
  };

  const addQuantity = () => {
    if (currentProduct) {
      if (currentProduct.quantity < product.stock) {
        dispatch(sumQuantity(currentProduct));
        dispatch(sumSummary(product.price));
      }
    }
  };

  return (
    <div className='info-footer'>
      <div className='selector__container'>
        <div>
          <span
            onClick={subtractQuantity}
            className={
              currentProduct !== undefined
                ? currentProduct.quantity > 1
                  ? 'icon'
                  : 'icon iconDisabled'
                : ''
            }
          >
            -
          </span>
        </div>
        <div>
          <span>{currentProduct ? currentProduct.quantity : null}</span>
        </div>
        <div>
          <span
            onClick={addQuantity}
            className={
              currentProduct !== undefined
                ? currentProduct.quantity > 1
                  ? 'icon'
                  : 'icon iconDisabled'
                : ''
            }
          >
            +
          </span>
        </div>
      </div>
      <div className='item__price'>
        <span className='price-tag'>
          $
          {currentProduct !== undefined
            ? formatNumberWithDot(product.price * currentProduct.quantity)
            : null}
        </span>
      </div>
    </div>
  );
};

export default InfoFooterMobile;
