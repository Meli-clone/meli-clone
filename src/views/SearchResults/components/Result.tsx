import './Result.scss';

const Result = () => {
  return (
    <li className='result_container'>
      <picture>
        <img src='https://cdn.forbes.co/2021/05/El-sen%CC%83or-de-los-anillos-Golum-Foto-Cortesia-1024x576.jpg' />
      </picture>
      <div className='item_info'>
        <div className='item-title'>
          <span className='label'>
            Trilogia El Señor De Los Anillos Tolkien
          </span>
          <span className='seller'>Vendido por Libreria Palito</span>
        </div>
        <div className='item_price'>
          <span className='price_off'>$12000</span>
          <div className='price_container'>
            <span className='price'>
              <span>$</span>
              <span>11400</span>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Result;
