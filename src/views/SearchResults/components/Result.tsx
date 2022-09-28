import './Result.scss';
import { Product } from '../SearchResults';
import PurchaseDiscount from './PurchaseDiscount';
import FreeShipping from './FreeShipping';
import Fulfillment from './Fulfillment';
import { formattedPrice } from '@/utils/helpers/formattedPrice';

interface Prop {
  product: Product;
}

const Result = ({ product }: Prop) => {
  const {
    title,
    original_price,
    price,
    thumbnail,
    seller,
    prices,
    shipping,
    tags,
  } = product;

  return (
    <li className='result_container'>
      <picture>
        <img src={thumbnail} />
      </picture>
      <div className='item_info'>
        {tags.includes('best_seller_candidate') && (
          <div className='best_seller'>MÁS VENDIDO</div>
        )}
        <div className='item-title'>
          <span className='label'>{title}</span>
          {seller?.eshop?.nick_name && (
            <span className='seller'>Vendido por {seller.eshop.nick_name}</span>
          )}
        </div>
        <div className='item_price'>
          <div className='price_discount_container'>
            {original_price - price > 0 && (
              <span className='price_off'>
                ${formattedPrice(original_price)}
              </span>
            )}
            <div className='price_container'>
              <span className='price'>
                <span>$</span>
                <span>{formattedPrice(price)}</span>
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
            {shipping.free_shipping && <FreeShipping />}
            {shipping.logistic_type === 'fulfillment' && <Fulfillment />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Result;
