import './promotionsBanner.scss';

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
      <div>
        <span>
          Consigue los mejores beneficios en Mercado Libre y Mercado Pago
        </span>
        <div>
          <div>
            <div>
              <img
                src='assets/images/promotionsBanner/disney_plus/png'
                alt='Logo disney plus'
              />
            </div>
            <span>Disney+ sin cargo</span>
          </div>
          <div>
            <div>
              <img src='' alt='' />
            </div>
            <span>Star+ sin cargo</span>
          </div>
          <div>
            <div>
              <img src='' alt='' />
            </div>
            <span>
              Envíos gratis y rápidos desde $ 5.500 y 45% OFF en envíos de menos
              de $ 5.500
            </span>
          </div>
        </div>
      </div>
      <a href=''></a>
    </section>
  );
};

export default PromotionsBanner;
