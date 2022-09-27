import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterOptions from './components/FilterOptions';
import Result from './components/Result';
import { getProductsByQuery } from '@/services/products';

export interface Product {
  id: string;
  title: string;
  price: number;
  sale_price: number;
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

  console.log(productList[1]);

  // free_shipping: true
  // logistic_type: "fulfillment"
  // mode: "me2"
  // store_pick_up: false

  // free_shipping: false
  // logistic_type: "xd_drop_off"
  // mode: "me2"
  // store_pick_up: false

  return (
    <div
      style={{
        height: '2000px',
        backgroundColor: 'lightGray',
        display: 'grid',
        // gridTemplateColumns: '300px auto',
      }}
    >
      {/* <h1>El señor de los anillos</h1> */}
      {/* <FilterOptions /> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          // width: '100vw',
        }}
      >
        {productList.map(product => (
          <Result key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
