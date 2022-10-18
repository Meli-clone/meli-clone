import InfoFooterMobile from './InfoFooterMobile';
import './ItemCart.scss';
import { ProductCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { deleteItem } from '@/store/cart/cartSlice';
import { deleteSummary } from '@/store/summary/summarySlice';

interface Prop {
  product: ProductCart;
}

const ItemCart = ({ product }: Prop) => {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(deleteItem(product.id));
    dispatch(deleteSummary(product.price * product.quantity));
  };

  return (
    <div className='item-cart'>
      <article className='item'>
        <div className='item__container'>
          <figure>
            <a>
              <img className='item__container--image' src={product.image} />
            </a>
          </figure>
          <div className='item__container--information'>
            <div className='information__description'>
              <h2>{product.title}</h2>
              <h3></h3>
            </div>
            <InfoFooterMobile product={product} />
          </div>
        </div>
        <div className='item-action'>
          <ul className='item-action-single'>
            <li>
              <span onClick={deleteProduct}>Eliminar</span>
            </li>
            <li>
              <a href='#'>Más productos del vendedor</a>
            </li>
            <li>
              <a href='#'>Comprar ahora</a>
            </li>
            <li>
              <a href='#'>Guardar para después</a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ItemCart;
