import { AiFillThunderbolt } from 'react-icons/ai';
import './Fulfillment.scss';

const Fulfillment = () => {
  return (
    <span className='fulfillment'>
      <AiFillThunderbolt />
      <span className='full'>FULL</span>
    </span>
  );
};

export default Fulfillment;
