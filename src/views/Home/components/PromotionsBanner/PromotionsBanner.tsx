import './promotionsBanner.scss';
import disneyPlus from '@/assets/images/logos/disney_plus-logo.png';
import starPlus from '@/assets/images/logos/star_plus-logo.png';
import truck from '@/assets/images/logos/truck-logo.png';

const PromotionsBanner = () => {
  return (
    <section className='promotionsBanner'>
      <div className='promotionsBanner_header'>
        <div className='promotionsBanner_header-title'>
          Suscribete al nivel 6
        </div>
        <div className='promotionsBanner_prices promotionsBanner_prices-separator'>
          <span className='promotionsBanner_prices-price-strike'>$ 1.439</span>
          <div>
            <span className='prices_price-bold'>$ 499</span>
            <span className='prices_price-period'>/mes</span>
          </div>
        </div>
      </div>
      <div className='promotionsBanner_body'>
        <span className='promotionsBanner_body-title'>
          Consigue los mejores beneficios en Mercado Libre y Mercado Pago
        </span>
        <div className='promotionsBanner_body-benefits'>
          <div className='promotionsBanner_body-benefit'>
            <div className='body-benefit-logo'>
              <img src={disneyPlus} alt='Logo disney plus' />
            </div>
            <span className='body-benefit-text'>Disney+ sin cargo</span>
          </div>
          <div className='promotionsBanner_body-benefit'>
            <div className='body-benefit-logo'>
              <img src={starPlus} alt='Logo Star+' />
            </div>
            <span className='body-benefit-text'>Star+ sin cargo</span>
          </div>
          <div className='promotionsBanner_body-benefit'>
            <div className='body-benefit-logo'>
              <img src={truck} alt='Logo camión de Mercado Libre' />
            </div>
            <span className='body-benefit-text'>
              Envíos gratis y rápidos desde $5.500 y 45% OFF en envíos de menos
              de $5.500
            </span>
          </div>
        </div>
      </div>
      <div className='promotionsBanner_buttons'>
        <a href='#' className='promotionsBanner_button'>
          <span className='promotionsBanner_button-text'>Suscribete</span>
          <svg className='promotionsBanner_button-arrow' viewBox='0 0 9 14'>
            <path
              fill='none'
              fillRule='evenodd'
              strokeWidth='1.5'
              d='M1 1.343L6.657 7 1 12.657'
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default PromotionsBanner;
