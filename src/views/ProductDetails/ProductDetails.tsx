import './ProductDetails.scss';
import { useState, useEffect } from 'react';
import { getProductDetail } from '@/services/details/details.service';
import Details from './components/Details';
import { useNavigate, useParams } from 'react-router-dom';

export interface Product {
  id: string;
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
  error: string;
}

export type Attributes = Array<{
  value_name: string;
  name: string;
  id: string;
}>;

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>();
  const { productID } = useParams<string>();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetail(productID).then(res => setProduct(res));
  }, [productID]);

  if (product?.error == 'resource not found') {
    navigate('*');
  }

  return <>{product ? <Details product={product} /> : null}</>;
};

export default ProductDetails;
