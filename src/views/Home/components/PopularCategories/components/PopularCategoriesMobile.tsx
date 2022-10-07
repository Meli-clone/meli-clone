import CardPopularCategories from './CardPopularCategories';
import './PopularCategoriesMobile.scss';

interface CategoryData {
  icon: string;
  title: string;
}

interface Props {
  categoryList: Array<CategoryData>;
}

const PopularCategoriesMobile = ({ categoryList }: Props) => {
  return (
    <div className='category_list_mobile'>
      {categoryList
        .filter((e, i) => i < 6)
        .map(card => (
          <CardPopularCategories key={card.title} {...card} />
        ))}
    </div>
  );
};

export default PopularCategoriesMobile;
