import './AddedCartInfo.scss';
import { BsCheckLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';

interface Props {
  product: {
    image: string;
    title: string;
  };
}

const AddedCartInfo = ({ product }: Props) => {
  const navigate = useNavigate();
  const cart = useAppSelector(state => state.cart.value);
  const total = useAppSelector(state => state.summary.price);

  return (
    <section className='addedCart'>
      <div className='addedCartContainer'>
        <div className='addedCart_productContainer'>
          <div className='addedCart_imageContainer'>
            <img
              className='addedCart_image'
              src={product.image}
              alt={product.title}
            />
            <div className='addedCart_iconContainer'>
              <BsCheckLg className='addedCart_icon' />
            </div>
          </div>
          <div className='addedCart_infoContainer'>
            <h1 className='addedCart_infoTitle'>Agregaste a tu carrito</h1>
            <p className='addedCart_infoDescription'>{product.title}</p>
          </div>
        </div>
        <div className='addedCart_line'></div>
        <div className='addedCart_cartContainer'>
          <div className='addedCart_textContainer'>
            <p className='addedCart_cartQuantity'>
              {cart.length} {cart.length > 1 ? 'productos' : 'producto'} en tu
              carrito: $<span>{formatNumberWithDot(total)}</span>
            </p>
            <div className='addedCart_cart_imagesContainer'>
              {cart.map((item, index) => {
                return (
                  <img
                    className='addedCart_cartImages'
                    key={index}
                    src={item.image}
                    alt={item.title}
                  />
                );
              })}
            </div>
          </div>
          <div className='addedCart_buttonsContainer'>
            <button
              className='addedCart_buttonPrimary'
              onClick={() => navigate('/cart')}
            >
              Ver Carrito
            </button>
            <button
              className='addedCart_buttonSecondary'
              onClick={() => navigate('/checkout')}
            >
              Comprar Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddedCartInfo;
