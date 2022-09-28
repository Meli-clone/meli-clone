import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterOptions from './components/FilterOptions';
import Result from './components/Result';
import { getProductsByQuery } from '@/services/products';
import './SearchResults.scss';

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

const SearchResults = () => {
  const [productList, setProductList] = useState<Array<Product>>([]);
  const { search } = useParams();

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    const res = await getProductsByQuery(search);

    setProductList(res);
  };

  console.log(productList[0]);
  return (
    <div className='search_results_container'>
      <header className='search_results_header'>
        <h1>El señor de los anillos</h1>
      </header>
      <div className='search_results_grid'>
        <FilterOptions />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
          }}
        >
          {productList.map(product => (
            <Result key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
