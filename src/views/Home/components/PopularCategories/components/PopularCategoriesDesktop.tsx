import CardPopularCategories from './CardPopularCategories';
import './PopularCategoriesDesktop';

interface CategoryData {
  icon: string;
  title: string;
}

interface Props {
  categoryList: Array<CategoryData>;
}

const PopularCategoriesDesktop = ({ categoryList }: Props) => {
  return (
    <div>
      {categoryList.map(card => (
        <CardPopularCategories key={card.title} {...card} />
      ))}
    </div>
  );
};

export default PopularCategoriesDesktop;
