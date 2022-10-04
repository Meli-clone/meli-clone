import './Details.scss';
import { useState, useEffect } from 'react';
import { BsTruck } from 'react-icons/bs';
import { TbArrowBack } from 'react-icons/tb';
import { AiOutlineTrophy } from 'react-icons/Ai';
import { BiCheckShield } from 'react-icons/bi';
import DetailsTable from './DetailsTable';
import { Product } from '../ProductDetails';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cart/cartSlice';

interface Prop {
  product: Product;
}

const Details = ({ product }: Prop) => {
  console.log(product);
  const [titleStock, setTitleStock] = useState<string>('');
  const dispatch = useAppDispatch();
  const carrito = useAppSelector(state => state.cart.value);

  const productToCart = {
    id: product.id,
    title: product.title,
    price: product.price,
    stock: product.available_quantity,
    image: product.pictures[0].secure_url,
    quantity: 2,
  };

  const addCart = () => {
    dispatch(addToCart(productToCart));
    console.log(carrito);
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

  return (
    <section className='details'>
      <div className='details_container'>
        <div className='details_dataContainer'>
          <div className='details_column1'>
            <div className='details_imgContainer'>
              <img src={product.pictures[0].secure_url} alt='hola' />
            </div>
            <DetailsTable atr={product.attributes} />
          </div>
          <div className='details_column2'>
            <div>
              <div className='details_conditionContainer'>
                <p>{product.condition}</p>
                {product.sold_quantity === 0 ? null : <p>|</p>}
                {product.sold_quantity === 0 ? null : (
                  <p>{product.sold_quantity} vendidos</p>
                )}
              </div>
              <h2 className='details_title'>{product.title}</h2>
              <h3 className='details_price'>$ {product.price}</h3>
              <p className='details_cuotas'>
                en 12X $ {(product.price / 12).toFixed(2)}
              </p>
              <a className='details_link'>Ver los medios de pago</a>
            </div>
            <div className='details_column1_mobile'>
              <img src={product.pictures[0].secure_url} alt='hola' />
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
                {product.available_quantity >= 1 ? (
                  <p className='details_available'>
                    Puedes comprar hasta {product.available_quantity}{' '}
                    {product.available_quantity === 1 ? (
                      <span>unidad</span>
                    ) : (
                      <span>unidades</span>
                    )}
                  </p>
                ) : null}
                {product.buying_mode === 'buy_it_now' && (
                  <button className='details_buttonBuy'>Comprar ahora</button>
                )}
                <button className='details_buttonCart' onClick={addCart}>
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
