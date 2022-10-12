import { CategoryData } from '../PopularCategories';
import CardPopularCategories from './CardPopularCategories';
import './PopularCategoriesMobile.scss';

interface Props {
  categoryList: Array<CategoryData>;
}

const PopularCategoriesMobile = ({ categoryList }: Props) => {
  return (
    <div className='category_list_mobile'>
      {categoryList
        .filter((e, i) => i < 6)
        .map(card => (
          <CardPopularCategories key={card.name} {...card} />
        ))}
    </div>
  );
};

export default PopularCategoriesMobile;
