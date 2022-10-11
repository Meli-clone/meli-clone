import { Link } from 'react-router-dom';

//STYLES AND IMAGES
import meliLogo2 from '@/assets/images/meli-logo2.svg';
import './MinimalHeader.scss';

//ICONS
import { TbHelp } from 'react-icons/tb';

const MinimalHeader = () => {
  return (
    <header className='minimal_header'>
      <div className='minimal_header__container'>
        <Link to='/' className='minimal_header__container__logo'>
          <img src={meliLogo2}></img>
        </Link>
        <Link to='#' className='minimal_header__container__help'>
          <TbHelp className='help_icon' />
        </Link>
      </div>
    </header>
  );
};

export default MinimalHeader;
