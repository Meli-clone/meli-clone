//COMPONENTS
import HamburgerMenu from './HamburgerMenu';

//STYLES AND IMAGES
import './Header.scss';
import meliLogo1 from '@/assets/images/meli-logo1.svg';

//ICONS
import { BsCart2 } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Header = () => {
  return (
    <div className='header'>
      <a className='header__logo'>
        <img src={meliLogo1}></img>
      </a>
      <input className='header__search-input' placeholder='Buscar'></input>
      {/* <div className='header__nav_bar_button'>X</div> */}
      <HamburgerMenu />
      <div className='header__user_address'>
        <div className='header__user_address__icon'>
          <IoLocationOutline />
        </div>
        <span>Ingresa tu ubicación</span>
        <div className='header__user_address__icon'>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <nav className='header__nav_bar'>CATEGORIAS</nav>
      <div className='header__user_info'>
        <BsCart2 />
      </div>
    </div>
  );
};

export default Header;
