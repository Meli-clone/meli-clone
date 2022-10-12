import './CardPopularCategories.scss';
import { getCategoryIcon } from '@/utils/helpers/getCategoryIcon';

interface Props {
  name: string;
  id: string;
}

const CardPopularCategories = ({ name, id }: Props) => {
  const Icon = getCategoryIcon(id);

  return (
    <a className='popular_categories_card'>
      <div className='icon'>{<Icon />}</div>
      <p className='description'>{name}</p>
    </a>
  );
};

export default CardPopularCategories;
