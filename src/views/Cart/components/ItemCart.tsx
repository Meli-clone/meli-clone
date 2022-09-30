import InfoFooterMobile from './InfoFooterMobile/InfoFooterMobile';
import './ItemCart.scss';

const ItemCart = () => {
  return (
    <div className='item-cart'>
      <article className='item'>
        <div className='item__container'>
          <figure>
            <a>
              <img src='https://http2.mlstatic.com/taladro-atornillador-inalamb-10mm-kroner-144-v---munequera-D_Q_NP_932269-MLA47949358595_102021-R.webp' />
            </a>
          </figure>
          <div className='item__container--information'>
            <div className='information__description'>
              <h2>
                Taladro Atornillador Inalámb 10mm Kroner 14,4 V + Muñequera
              </h2>
              <h3>Color: Verde lima, Frecuencia: 50</h3>
              <span>Envío gratis</span>
            </div>
            {/*Aca se renderiza un componente infoFooter mobile o desktop*/}
            <InfoFooterMobile />
          </div>
        </div>
        <div className='item-action'></div>
      </article>
    </div>
  );
};

export default ItemCart;
