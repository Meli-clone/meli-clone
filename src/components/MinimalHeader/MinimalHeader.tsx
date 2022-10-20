import { Link } from 'react-router-dom';

//STYLES AND IMAGES
import logo from '@/assets/images/planet-express.png';
import './MinimalHeader.scss';

//ICONS
import { TbHelp } from 'react-icons/tb';

const MinimalHeader = () => {
  return (
    <header className='minimal_header' id='minimalHeader'>
      <div className='minimal_header__container'>
        <Link to='/' className='minimal_header__container__logo'>
          <img src={logo}></img>
        </Link>
        <Link to='#' className='minimal_header__container__help'>
          <TbHelp className='help_icon' />
        </Link>
      </div>
    </header>
  );
};

export default MinimalHeader;
