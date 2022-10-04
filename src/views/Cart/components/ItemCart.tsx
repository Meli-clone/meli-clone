import InfoFooterMobile from './InfoFooterMobile/InfoFooterMobile';
import './ItemCart.scss';
import { ProductCart } from '@/features/cart/cartSlice';

interface Prop {
  producto: ProductCart;
}

const ItemCart = ({ producto }: Prop) => {
  return (
    <div className='item-cart'>
      <article className='item'>
        <div className='item__container'>
          <figure>
            <a>
              <img src={producto.img} />
            </a>
          </figure>
          <div className='item__container--information'>
            <div className='information__description'>
              <h2>{producto.title}</h2>
              <h3>{producto.description}</h3>
              <span>Envío gratis</span>
            </div>
            {/*Aca se renderiza un componente infoFooter mobile o desktop*/}
            <InfoFooterMobile producto={producto} />
          </div>
        </div>
        <div className='item-action'></div>
      </article>
    </div>
  );
};

export default ItemCart;
