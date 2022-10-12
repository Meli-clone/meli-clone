import { Link } from 'react-router-dom';

//COMPONENTS
import UserOptions from './components/UserOptions';
import { Divide as Hamburger } from 'hamburger-react';

//STYLES AND IMAGES
import './Header.scss';
import meliLogo2 from '@/assets/images/meli-logo2.svg';
import disneyPromoImg from '@/assets/images/header-disney-promo.png';

//ICONS
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface Props {
  mobileMenuOpened: boolean;
  setMobileMenuOpened: (value: boolean) => void;
}

const Header = ({ mobileMenuOpened, setMobileMenuOpened }: Props) => {
  const screenWidth = window.innerWidth;

  return (
    <div className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo'>
          <img src={meliLogo2}></img>
        </Link>
        <input
          className='header__search-input'
          placeholder='Buscar productos, marcas y más...'
        ></input>
        <div className='header__hamburguer-btn'>
          <Hamburger
            size={25}
            color='#333'
            onToggle={() => setMobileMenuOpened(!mobileMenuOpened)}
          />
        </div>
        <div className='header__disney_promo'>
          <img src={disneyPromoImg} alt='logo de mercado libre'></img>
        </div>
        <div className='header__user_address'>
          <div>
            <div className='header__user_address__icon'>
              <IoLocationOutline />
            </div>
            <p>
              Ingresa tu<span>ubicación</span>
            </p>
          </div>
          {screenWidth < 1024 && (
            <div className='header__user_address__icon'>
              <MdOutlineKeyboardArrowRight />
            </div>
          )}
        </div>
        <nav className='header__nav_bar'>
          <ul>
            <li>Categorias</li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Moda</li>
            <li>Vender</li>
            <li>Ayuda/PQR</li>
          </ul>
        </nav>
        <UserOptions />
      </div>
    </div>
  );
};

export default Header;
