import './SearchResults.scss';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { getProductsByQuery } from '@/services/products';
import FilterOptions from './components/FilterOptions';
import Result from './components/Result';
import SortBy from './components/SortBy';
import DropdownFilter from './components/DropdownFilters/DropdownFilters';
import FilterOptionsSelected from './components/FilterOptionsSelected';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import { SearchedProducts } from '@/types';
import formatPascalCase from '@/utils/helpers/formatPascalCase';

const SearchResults = () => {
  const [productsData, setProductsData] = useState<SearchedProducts>();
  const [filters, setFilters] = useState<SearchedProducts['filters']>([]);
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    handleGetProducts(location.search);
  }, [location.search]);

  useEffect(() => {
    if (searchParams.get('q') !== null) {
      document.title = `${formatPascalCase(
        searchParams.get('q'),
      )} | Planet Express`;
    }
  }, []);

  const handleGetProducts = async (search: string) => {
    const res = await getProductsByQuery(search);
    setProductsData(res);

    setFilters(res.available_filters);
  };

  const handleSort = (id: string) => {
    searchParams.set('sort', id);
    setSearchParams(searchParams);
    setSortIsOpen(false);
  };

  const handleToggleOpenFilters = () => {
    setFilterIsOpen(prev => !prev);
  };

  if (!productsData) return;

  return (
    <div className='search_results_container'>
      <div className='search_results_grid'>
        <div className='filters_container'>
          <header className='search_results_header'>
            <h1>{formatPascalCase(searchParams.get('q'))}</h1>
            <span className='total_results'>
              {formatNumberWithDot(productsData.paging.total)} resultados
            </span>
          </header>
          <FilterOptions
            actualFilters={productsData.filters}
            availableFilters={filters}
          />
        </div>

        <div className='filters_container_mobile'>
          <div className='navbar'>
            <ul className='filter_list'>
              <li>
                <button onClick={() => setSortIsOpen(true)}>
                  <span className='icon'>
                    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M6.857 23.527l-3.705-3.705-1.616 1.616 6.464 6.464 6.464-6.462-1.616-1.616-3.705 3.701v-18.953h-2.286v18.955zM22.857 8.473l-3.705 3.705-1.616-1.616 6.464-6.464 0.809 0.807 5.655 5.657-1.616 1.616-3.705-3.703v18.953h-2.286v-18.955z'></path>
                    </svg>
                  </span>
                  <span>Ordenar</span>
                </button>
              </li>
              <li>
                <button onClick={() => setFilterIsOpen(true)}>
                  <span className='icon'>
                    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15.9 22h16.1v2h-16.1c-0.479 2.301-2.491 4.005-4.9 4.005s-4.42-1.704-4.894-3.973l-0.006-0.032h-6.1v-2h6.1c0.479-2.301 2.491-4.005 4.9-4.005s4.421 1.704 4.894 3.973l0.006 0.032zM18.1 8c0.48-2.301 2.491-4.005 4.9-4.005s4.421 1.704 4.894 3.973l0.006 0.032h4.1v2h-4.1c-0.48 2.301-2.491 4.005-4.9 4.005s-4.421-1.704-4.894-3.973l-0.006-0.033h-18.1v-2h18.1zM23 12c1.657 0 3-1.343 3-3s-1.343-3-3-3v0c-1.657 0-3 1.343-3 3s1.343 3 3 3v0zM11 26c1.657 0 3-1.343 3-3s-1.343-3-3-3v0c-1.657 0-3 1.343-3 3s1.343 3 3 3v0z'></path>
                    </svg>
                  </span>
                  <span>Filtrar</span>
                </button>
              </li>
            </ul>
          </div>
          <header>
            <h1>{searchParams.get('q')}</h1>
            <FilterOptionsSelected actualFilters={productsData.filters} />
          </header>
        </div>

        <div className={`list_sort_mobile ${sortIsOpen ? 'open' : 'closed'}`}>
          <header>
            <button className='icon' onClick={() => setSortIsOpen(false)}>
              <FiArrowLeft />
            </button>
            <span className='label'>Ordenar por</span>
          </header>
          <footer>
            {[productsData.sort, ...productsData.available_sorts]
              .sort((a, b) => b.name.localeCompare(a.name))
              .map(sort => {
                if (productsData.sort.id === sort.id) {
                  return (
                    <button className='active' key={sort.id} disabled>
                      {sort.name}
                    </button>
                  );
                }

                return (
                  <button key={sort.id} onClick={() => handleSort(sort.id)}>
                    {sort.name}
                  </button>
                );
              })}
          </footer>
        </div>

        <DropdownFilter
          filters={filters}
          filterIsOpen={filterIsOpen}
          handleToggleOpenFilters={handleToggleOpenFilters}
        />

        <div className='list_container'>
          <SortBy
            actualSort={productsData.sort}
            availableSorts={productsData.available_sorts}
          />
          {productsData.results.map(product => (
            <Result key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
