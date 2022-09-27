import './Result.scss';
import { Product } from '../SearchResults';
import PurchaseDiscount from './PurchaseDiscount';
import FreeShipping from './FreeShipping';
import Fulfillment from './Fulfillment';

interface Prop {
  product: Product;
}

const Result = ({ product }: Prop) => {
  const { title, original_price, price, thumbnail, seller, prices, shipping } =
    product;

  const transformPrice = (price: number) => {
    const formattedNumber = price
      .toString()
      .split('')
      .reverse()
      .map((e, i) => (i % 3 === 0 && i !== 0 ? `${e}.` : e))
      .reverse()
      .join('');

    return formattedNumber;
  };

  return (
    <li className='result_container'>
      <picture>
        <img src={thumbnail} />
      </picture>
      <div className='item_info'>
        <div className='item-title'>
          <span className='label'>{title}</span>
          {seller?.eshop?.nick_name && (
            <span className='seller'>Vendido por {seller.eshop.nick_name}</span>
          )}
        </div>
        <div className='item_price'>
          <div className='price_discount_container'>
            {original_price && (
              <span className='price_off'>
                ${transformPrice(original_price)}
              </span>
            )}
            <div className='price_container'>
              <span className='price'>
                <span>$</span>
                <span>{transformPrice(price)}</span>
              </span>
              {original_price && (
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
