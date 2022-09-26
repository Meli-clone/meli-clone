import { useState, useEffect } from 'react';
import Filter from './Filter';
import './FilterOptions.scss';

interface FilterData {
  title: string;
  data: Array<{
    href: string;
    label: string;
    quantity: number;
  }>;
}

const FILTER_DATA = [
  {
    title: 'Tiendas oficiales',
    data: [
      {
        href: '',
        label: 'Solo tiendas oficiales',
        quantity: 34,
      },
    ],
  },
  {
    title: 'Categorías',
    data: [
      {
        href: '',
        label: 'Joyas y Bijouterie',
        quantity: 16,
      },
      {
        href: '',
        label: 'Libros Físicos',
        quantity: 12,
      },
      {
        href: '',
        label: 'Hogar, Muebles y Jardín',
        quantity: 22,
      },
      {
        href: '',
        label: 'Antigüedades y Colecciones',
        quantity: 11,
      },
      {
        href: '',
        label: 'Deporte y Fitness',
        quantity: 7,
      },
      {
        href: '',
        label: 'Música, Películas y Series',
        quantity: 13,
      },
    ],
  },
  {
    title: 'Costo de envío',
    data: [
      {
        href: '',
        label: 'Gratis',
        quantity: 13,
      },
    ],
  },
];

const FilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState<Array<FilterData>>([]);

  useEffect(() => {
    setFilterOptions(FILTER_DATA);
  }, []);

  return (
    <aside className='filter_options_container'>
      <span>100 resultados</span>
      <section className='filter_list'>
        {filterOptions.map(e => (
          <Filter key={e.title} title={e.title} data={e.data} />
        ))}
      </section>
    </aside>
  );
};

export default FilterOptions;
