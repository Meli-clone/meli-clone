import './Result.scss';
import { Product } from '../SearchResults';
import PurchaseDiscount from './PurchaseDiscount';

interface Prop {
  product: Product;
}

const Result = ({ product }: Prop) => {
  const { title, price, sale_price, thumbnail, seller, prices } = product;

  return (
    <li className='result_container'>
      <picture>
        {/* <img src='https://cdn.forbes.co/2021/05/El-sen%CC%83or-de-los-anillos-Golum-Foto-Cortesia-1024x576.jpg' /> */}
        <img src={thumbnail} />
      </picture>
      <div className='item_info'>
        <div className='item-title'>
          <span className='label'>{title}</span>
          {seller?.eshop?.nick_name && (
            <span className='seller'>
              Vendido por {seller?.eshop?.nick_name}
            </span>
          )}
        </div>
        <div className='item_price'>
          {sale_price && <span className='price_off'>${sale_price}</span>}
          <div className='price_container'>
            <span className='price'>
              <span>$</span>
              <span>{price}</span>
            </span>
            {prices.purchase_discounts[0] && (
              <span>
                {
                  <PurchaseDiscount
                    discount={prices.purchase_discounts[0].discount_percentage}
                  />
                }
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Result;
