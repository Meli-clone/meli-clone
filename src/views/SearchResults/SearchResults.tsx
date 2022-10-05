import './SearchResults.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductsByQuery } from '@/services/products';
import FilterOptions from './components/FilterOptions';
import Result from './components/Result';
import SortBy from './components/SortBy';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';

export interface Product {
  id: string;
  title: string;
  original_price: number;
  price: number;
  thumbnail: string;
  seller: {
    eshop: {
      nick_name: string;
    };
  };
  prices: {
    purchase_discounts: Array<{
      discount_percentage: number;
    }>;
  };
  shipping: {
    free_shipping: boolean;
    logistic_type: 'fulfillment' | 'xd_drop_off';
  };
  tags: Array<string>;
}

export interface FilterOption {
  id: string;
  name: string;
  values: Array<{
    id: string;
    name: string;
    results: number;
  }>;
}

interface ProductsData {
  sort: {
    id: string;
    name: string;
  };
  available_sorts: Array<{
    id: string;
    name: string;
  }>;
  results: Array<Product>;
  paging: {
    total: number;
  };
  filters: Array<FilterOption>;
}

const SearchResults = () => {
  const [productsData, setProductsData] = useState<ProductsData>();
  const [filters, setFilters] = useState<Array<FilterOption>>([]);
  const location = useLocation();

  useEffect(() => {
    handleGetProducts(location.search);
  }, [location.search]);

  const handleGetProducts = async (search: string) => {
    const res = await getProductsByQuery(search);
    setProductsData(res);

    setFilters(res.available_filters);
  };

  if (!productsData) return <p>Loading...</p>;

  return (
    <div className='search_results_container'>
      <div className='search_results_grid'>
        <div>
          <header className='search_results_header'>
            <h1>El señor de los anillos</h1>
            <span className='total_results'>
              {formatNumberWithDot(productsData.paging.total)} resultados
            </span>
          </header>
          <FilterOptions
            actualFilters={productsData.filters}
            availableFilters={filters}
          />
        </div>
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
