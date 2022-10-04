import { Link } from 'react-router-dom';

//COMPONENTS
import HamburgerMenu from './HamburgerMenu';

//STYLES AND IMAGES
import './Header.scss';
import meliLogo2 from '@/assets/images/meli-logo2.svg';
import disneyPromoImg from '@/assets/images/header-disney-promo.png';

//ICONS
import { BsCart2 } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Header = () => {
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
          <HamburgerMenu />
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
        <div className='header__user_options'>
          <div className='header__user_options__user'>
            <Link to='/register'>Crea tu cuenta</Link>
            <Link to='/login'>Ingresa</Link>
            <a href='#'>Mis compras</a>
          </div>

          <Link to='/cart' className='user_options__car_btn'>
            <BsCart2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
