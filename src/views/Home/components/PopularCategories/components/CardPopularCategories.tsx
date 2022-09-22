import './CardPopularCategories.scss';
import { MdOutlineDirectionsCarFilled } from 'react-icons/md';

interface Props {
  title: string;
  icon: string;
}

const CardPopularCategories = ({ title }: Props) => {
  return (
    <a className='popular_categories_card'>
      <div className='icon'>{<MdOutlineDirectionsCarFilled />}</div>
      <p className='description'>{title}</p>
    </a>
  );
};

export default CardPopularCategories;
