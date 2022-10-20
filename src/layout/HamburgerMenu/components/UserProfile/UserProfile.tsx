import { useAppSelector } from '@/store/hooks';

//COMPONENTS
import LogOutBtn from '@/layout/components/LogOutBtn/LogOutBtn';

//STYLES AND IMAGES
import './UserProfile.scss';
import disney from '@/assets/images/header-disney-promo.png';

//ICONS
import { HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { userLoggedIn, username, userImage } = useAppSelector(
    state => state.user.userInfo,
  );

  return (
    <div className='hamburger_menu__user_profile'>
      {!userLoggedIn ? (
        <>
          <div className='profile_icon'>
            <HiOutlineUser />
          </div>
          <div>
            <h1>Bienvenido</h1>
            <p>Ingresa a tu cuenta para ver tus compras, favoritos, ect.</p>
          </div>
          <div className='log'>
            <Link to='/login' className='log__login'>
              Ingresa
            </Link>
            <Link to='/register' className='log__register'>
              Crea una cuenta
            </Link>
          </div>
        </>
      ) : (
        <>
          {userImage ? (
            <div className='profile_picture'>
              <img src={userImage} />
            </div>
          ) : (
            <div className='profile_icon'>
              <HiOutlineUser />
            </div>
          )}
          <div>
            <h1 className='loggedIn'>{`Hola ${username}`}</h1>
            <p className='loggedIn'>Nivel 1 - Mercado Puntos</p>
          </div>
          <div className='log'>
            <LogOutBtn />
          </div>
        </>
      )}
      <div className='hamburger_menu_imgContainer'>
        <img
          className='hamburger_menu_img'
          src={disney}
          alt='Promoción Disney'
        />
      </div>
    </div>
  );
};

export default UserProfile;
