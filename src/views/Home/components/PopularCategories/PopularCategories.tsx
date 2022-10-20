import './PopularCategories.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { useState, useEffect } from 'react';
import PopularCategoriesMobile from './components/PopularCategoriesMobile';
import PopularCategoriesDesktop from './components/PopularCategoriesDesktop';
import { getAllCategories } from '@/services/categories/categories.service';

export interface CategoryData {
  id: string;
  name: string;
}

const PopularCategories = () => {
  const [categoryList, setCategoryList] = useState<Array<CategoryData>>([]);

  const [width] = useWindowSize();

  useEffect(() => {
    getAllCategories()
      .then(res => setCategoryList(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className='popular_categories'>
      <div className='popular_categories_container'>
        <h2>Categorías populares</h2>
        {width < 768 ? (
          <PopularCategoriesMobile categoryList={categoryList} />
        ) : (
          <PopularCategoriesDesktop categoryList={categoryList} width={width} />
        )}
        <a>Ver más categorías</a>
      </div>
    </section>
  );
};

export default PopularCategories;
