import './ProductDetails.scss';
import { useState, useEffect } from 'react';
import { getProductDetail } from '@/services/product';
import Details from './components/Details';

export interface Product {
  sold_quantity: number;
  condition: string;
  title: string;
  price: number;
  buying_mode: string;
  available_quantity: number;
  pictures: Array<{
    secure_url: string;
  }>;
  descriptions: string;
  attributes: Attributes;
}

export type Attributes = Array<{
  value_name: string;
  name: string;
  id: string;
}>;

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProductDetail('MLA1122296562') /*  MLA1123824844*/
      .then(res => setProduct(res));
  }, []);

  console.log(product);

  return <>{product ? <Details product={product} /> : <h1>Cargando...</h1>}</>;
};

export default ProductDetails;
