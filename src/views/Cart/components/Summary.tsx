import { useAppSelector } from '@/store/hooks';
import './Summary.scss';
const Summary = () => {
  const sum = useAppSelector(state => state.summary);
  return (
    <div className='summary'>
      <div className='summary__info'>
        <span className='summary__info--label'>Total con envío</span>
        <span className='summary__info--price'>${sum.price.toFixed(3)}</span>
      </div>
      <div className='summary__actions'>
        <a className='summary__actions--button' href='#'>
          Continuar compra
        </a>
      </div>
    </div>
  );
};

export default Summary;
