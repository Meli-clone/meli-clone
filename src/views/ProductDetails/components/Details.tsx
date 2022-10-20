/* Styles */
import './Details.scss';
/* React */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/* Components */
import DetailsTable from './DetailsTable';
import DetailsSelector from './DetailsSelector';
import { Product } from '../ProductDetails';
/* Redux */
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cart/cartSlice';
import { addSummary } from '@/store/summary/summarySlice';
/* Icons */
import { BsTruck } from 'react-icons/bs';
import { TbArrowBack } from 'react-icons/tb';
import { AiOutlineTrophy } from 'react-icons/Ai';
import { BiCheckShield } from 'react-icons/bi';
/* Utils */
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import formatPascalCase from '@/utils/helpers/formatPascalCase';

interface Prop {
  product: Product;
}

const Details = ({ product }: Prop) => {
  const [titleStock, setTitleStock] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [clicked, setClicked] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSelectClick = () => setClicked(!clicked);

  const productToCart = {
    id: product.id,
    title: product.title,
    price: product.price,
    stock: product.available_quantity,
    image: product.pictures[0].secure_url,
    quantity: quantity,
  };

  const productSummary = {
    price: product.price,
    quantity: quantity,
  };

  const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? 'null');
  const handleAddCart = () => {
    localStorage.setItem('productToCart', JSON.stringify(productToCart));
    if (userInfo) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const goToCart = () => {
    if (userInfo) {
      dispatch(addToCart(productToCart));
      dispatch(addSummary(productSummary));
      navigate('/checkout');
    } else {
      dispatch(addToCart(productToCart));
      dispatch(addSummary(productSummary));
      localStorage.setItem('navToCheckout', JSON.stringify(true));
      navigate('/login');
    }

    navigate('/checkout');
  };

  const handleQuantity = (value: number) => {
    setQuantity(value);
    setClicked(false);
  };

  useEffect(() => {
    if (product.available_quantity == 1) {
      setTitleStock('¡Última disponible!');
    } else if (product.available_quantity == 0) {
      setTitleStock('No hay stock disponible');
    } else {
      setTitleStock('Stock disponible');
    }
  });

  useEffect(() => {
    if (product) document.title = product?.title;
  }, []);

  return (
    <section className='details'>
      <div className='details_container'>
        <div className='details_dataContainer'>
          <div className='details_column1'>
            <div className='details_imgContainer'>
              <img src={product.pictures[0].secure_url} alt={product.title} />
            </div>
            <DetailsTable atr={product.attributes} />
          </div>
          <div className='details_column2'>
            <div>
              <div className='details_conditionContainer'>
                <p>{formatPascalCase(product.condition)}</p>
                {product.sold_quantity === 0 ? null : <p>|</p>}
                {product.sold_quantity === 0 ? null : (
                  <p>{formatNumberWithDot(product.sold_quantity)} vendidos</p>
                )}
              </div>
              <h2 className='details_title'>{product.title}</h2>
              <h3 className='details_price'>
                $ {formatNumberWithDot(product.price)}
              </h3>
              <p className='details_cuotas'>
                en 12X $ {formatNumberWithDot(product.price / 12)}
              </p>
              <a className='details_link'>Ver los medios de pago</a>
            </div>
            <div className='details_column1_mobile'>
              <img src={product.pictures[0].secure_url} alt={product.title} />
            </div>
            <div className='details_buyContainer'>
              <div className='details_buy_infoContainer'>
                <BsTruck className='details_icons' />
                <div>
                  <p className='details_greenTitle'>Llega gratis en 2 días</p>
                  <p className='details_info'>
                    Comprando dentro de las próximas 6hs
                  </p>
                  <a className='details_link'>Ver más formas de entrega</a>
                </div>
              </div>
              <div className='details_buy_infoContainer'>
                <TbArrowBack className='details_icons' />
                <div>
                  <p className='details_greenTitle'>Devolución Gratis</p>
                  <p className='details_info'>
                    Tenés 30 días desde que lo recibís
                  </p>
                  <a className='details_link'>Conocer más</a>
                </div>
              </div>
              <div className='details_buy_buttonsContainer'>
                <h4 className='details_stock'>{titleStock}</h4>
                {product.available_quantity > 1 && (
                  <DetailsSelector
                    product={product}
                    quantity={quantity}
                    handleQuantity={handleQuantity}
                    clicked={clicked}
                    handleSelectClick={handleSelectClick}
                  />
                )}

                {product.available_quantity > 1 ? (
                  product.available_quantity < 5 ? (
                    <p className='details_available'>
                      Puedes comprar {product.available_quantity}{' '}
                      {product.available_quantity === 1 ? (
                        <p className='details_available'>unidad</p>
                      ) : (
                        <p className='details_available'>unidades</p>
                      )}
                    </p>
                  ) : (
                    <p className='details_available'>
                      Puedes comprar 5 unidades
                    </p>
                  )
                ) : null}

                {product.buying_mode === 'buy_it_now' && (
                  <button className='details_buttonBuy' onClick={goToCart}>
                    Comprar ahora
                  </button>
                )}
                <button className='details_buttonCart' onClick={handleAddCart}>
                  Agregar al carrito
                </button>
              </div>
              <div className='details_buy_infoContainer'>
                <BiCheckShield className='details_iconsGray' />
                <div>
                  <p className='details_blueTitle'>Compra protegida.</p>
                  <p className='details_infoGray'>
                    Recibí el producto que esperabas o te devolvemos tu dinero.
                  </p>
                </div>
              </div>
              <div className='details_buy_infoContainer'>
                <AiOutlineTrophy className='details_iconsGray' />
                <div>
                  <p className='details_blueTitle'>Mercado Puntos.</p>
                  <p className='details_infoGray'>Sumá puntos</p>
                </div>
              </div>
            </div>
          </div>
          <div className='details_tablePhone'>
            <DetailsTable atr={product.attributes} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
