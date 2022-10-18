import { useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import './Summary.scss';

const Summary = () => {
  const sum = useAppSelector(state => state.summary);
  return (
    <div className='summary'>
      <div className='summary__info'>
        <span className='summary__info--label'>Total</span>
        <span className='summary__info--price'>
          ${formatNumberWithDot(sum.price)}
        </span>
      </div>
      <div className='summary__actions'>
        <Link to={'/checkout'} className='summary__actions--button'>
          Continuar compra
        </Link>
      </div>
    </div>
  );
};

export default Summary;
