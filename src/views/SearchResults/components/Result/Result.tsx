import './Result.scss';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import formatPascalCase from '@/utils/helpers/formatPascalCase';
import Fulfillment from '@/components/Fulfillment';
import PurchaseDiscount from '@/components/PurchaseDiscount';
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

interface Prop {
  product: Product;
}

const Result = ({ product }: Prop) => {
  const {
    id,
    title,
    original_price,
    price,
    thumbnail,
    seller,
    shipping,
    tags,
  } = product;

  const navigate = useNavigate();

  const handleClickProduct = (id: string) => {
    navigate(`/product_details/${id}`);
  };

  return (
    <li className='result_container'>
      <picture>
        <img src={thumbnail} onClick={() => handleClickProduct(id)} />
      </picture>
      <div className='item_info'>
        {tags.includes('best_seller_candidate') && (
          <div className='best_seller'>MÁS VENDIDO</div>
        )}
        <div className='item-title'>
          <span className='label' onClick={() => handleClickProduct(id)}>
            {title}
          </span>
          {seller?.eshop?.nick_name && (
            <span className='seller'>
              Vendido por {formatPascalCase(seller.eshop.nick_name)}
            </span>
          )}
        </div>
        <div className='item_price'>
          <div className='price_discount_container'>
            {original_price - price > 0 && (
              <span className='price_off'>
                ${formatNumberWithDot(original_price)}
              </span>
            )}
            <div className='price_container'>
              <span className='price'>
                <span>$</span>
                <span>{formatNumberWithDot(price)}</span>
              </span>
              {original_price - price > 0 && (
                <span>
                  {
                    <PurchaseDiscount
                      actualPrice={price}
                      originalPrice={original_price}
                    />
                  }
                </span>
              )}
            </div>
          </div>
          <div className='item_groud--shipping'>
            {shipping.logistic_type === 'fulfillment' && <Fulfillment />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Result;
