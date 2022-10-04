import InfoFooterMobile from './InfoFooterMobile/InfoFooterMobile';
import './ItemCart.scss';
import { ProductCart } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { deleteItem } from '@/store/cart/cartSlice';

interface Prop {
  producto: ProductCart;
}

const ItemCart = ({ producto }: Prop) => {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(deleteItem(producto.id));
  };

  return (
    <div className='item-cart'>
      <article className='item'>
        <div className='item__container'>
          <figure>
            <a>
              <img className='item__container--image' src={producto.image} />
            </a>
          </figure>
          <div className='item__container--information'>
            <div className='information__description'>
              <h2>{producto.title}</h2>
              <h3></h3>
              <span>Envío gratis</span>
            </div>
            {/*Aca se renderiza un componente infoFooter mobile o desktop*/}
            <InfoFooterMobile producto={producto} />
          </div>
        </div>
        <div className='item-action'>
          <ul className='item-action-single'>
            <li>
              <button onClick={deleteProduct}>Eliminar</button>
            </li>
            <li>Más productos del vendedor</li>
            <li>Comprar ahora</li>
            <li>Guardar para después</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ItemCart;
