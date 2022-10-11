import './Result.scss';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import formatPascalCase from '@/utils/helpers/formatPascalCase';
import Fulfillment from '@/components/Fulfillment';
import PurchaseDiscount from '@/components/PurchaseDiscount';
import FreeShipping from '@/components/FreeShipping';
import { Product } from '@/types';

interface Prop {
  product: Product;
}

const Result = ({ product }: Prop) => {
  const { title, original_price, price, thumbnail, seller, shipping, tags } =
    product;

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
            {shipping.free_shipping && <FreeShipping />}
            {shipping.logistic_type === 'fulfillment' && <Fulfillment />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Result;
