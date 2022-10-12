import InfoFooterMobile from './InfoFooterMobile';
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
