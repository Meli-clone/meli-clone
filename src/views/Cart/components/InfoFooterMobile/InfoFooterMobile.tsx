import { ProductCart } from '@/features/cart/cartSlice';
import { CgMathPlus } from 'react-icons/cg';
import { GrFormSubtract } from 'react-icons/gr';
import './InfoFooterMobile.scss';

interface Prop {
  producto: ProductCart;
}

const InfoFooterMobile = ({ producto }: Prop) => {
  return (
    <div className='info-footer'>
      <div className='selector__container'>
        <div>
          <span className='icon'>-</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span className='icon'>+</span>
        </div>
      </div>
      <div className='item__price'>
        <span className='price-tag'>${producto.price}</span>
      </div>
    </div>
  );
};

export default InfoFooterMobile;
