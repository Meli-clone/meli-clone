import { CgMathPlus } from 'react-icons/cg';
import { GrFormSubtract } from 'react-icons/gr';
import './InfoFooterMobile.scss';

const InfoFooterMobile = () => {
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
        <div className='item__original-price'>
          <span className='item__discount'>-20%</span>
          <span className='item__price-tag'>$23.999</span>
        </div>
        <span className='price-tag'>$18.999</span>
      </div>
    </div>
  );
};

export default InfoFooterMobile;
