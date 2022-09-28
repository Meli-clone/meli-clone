import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterOptions from './components/FilterOptions';
import Result from './components/Result';
import { getProductsByQuery } from '@/services/products';
import './SearchResults.scss';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import SortBy from './components/SortBy';

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
}

const SearchResults = () => {
  const [productList, setProductList] = useState<Array<Product>>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [filters, setFilters] = useState<Array<FilterOption>>([]);
  const { search } = useParams();
  const [productsData, setProductsData] = useState<ProductsData>();

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const res = await getProductsByQuery(search);
    console.log(res);

    setProductsData(res);

    setFilters(res.available_filters);
    setProductList(res.results);
    setTotalResults(res.paging.total);
  };

  return (
    <div className='search_results_container'>
      <div className='search_results_grid'>
        <div>
          <header className='search_results_header'>
            <h1>El señor de los anillos</h1>
            <span className='total_results'>
              {formatNumberWithDot(totalResults)} resultados
            </span>
          </header>
          <FilterOptions filters={filters} />
        </div>
        <div className='list_container'>
          <SortBy
            actualSort={productsData?.sort}
            availableSorts={productsData?.available_sorts}
          />
          {productList.map(product => (
            <Result key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
