import './PopularCategories.scss';
import useWindowSize from '@/hooks/useWindowSize';
import { useState, useEffect } from 'react';
import PopularCategoriesMobile from './components/PopularCategoriesMobile';
import PopularCategoriesDesktop from './components/PopularCategoriesDesktop';

const INITIAL_DATA = [
  {
    icon: '',
    title: 'Autos, Motos y Otros',
  },
  {
    icon: '',
    title: 'Celulares y Teléfonos',
  },
  {
    icon: '',
    title: 'Ropa y Accesorios',
  },
  {
    icon: '',
    title: 'Hogar, Muebles y Jardín',
  },
  {
    icon: '',
    title: 'Electrodomésticos y Aires Ac.',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video1',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video2',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video3',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video4',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video5',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video6',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video7',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video8',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video9',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video10',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video11',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video12',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video13',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video14',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video15',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video16',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video17',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video18',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video19',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video20',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video21',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video22',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video23',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video24',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video25',
  },
  {
    icon: '',
    title: 'Electrónica, Audio y Video26',
  },
];

interface CategoryData {
  icon: string;
  title: string;
}

const PopularCategories = () => {
  const [categoryList, setCategoryList] = useState<Array<CategoryData>>([]);

  const [width] = useWindowSize();

  useEffect(() => {
    setCategoryList(INITIAL_DATA);
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
