import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { useAppDispatch } from '@/store/hooks';

//COMPONENTS AND FUNCTIONS
import { logout, setUserInfo } from '@/store/user/user.slice';

//STYLES AND IMAGES
import './UserOptions.scss';

//ICONS
import { GiShoppingCart } from 'react-icons/gi';
import { TbUserCircle } from 'react-icons/tb';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiBell } from 'react-icons/fi';

const UserOptions = () => {
  const { userLoggedIn, username } = useAppSelector(
    state => state.user.userInfo,
  );

  const dispatch = useAppDispatch();
  console.log(userLoggedIn);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

    if (userInfo) {
      dispatch(setUserInfo(userInfo));
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <div className='user_options'>
      {!userLoggedIn ? (
        <ul className='user_options without_logging-in'>
          <li className='option'>
            <Link to='/register'>Crea tu cuenta</Link>
          </li>
          <li className='option'>
            <Link to='/login'>Ingresa</Link>
          </li>
          <li className='option'>
            <a href='#'>Mis compras</a>
          </li>
        </ul>
      ) : (
        <ul className='user_options logged_in'>
          <li className='option'>
            <div className='option__user_menu'>
              <TbUserCircle className='profile_picture' />
              <p>{username}</p>
              <MdKeyboardArrowDown className='arrow_icon' />
              <div className='user_nav'>
                <div>
                  <ul>
                    <li>Compras</li>
                    <li>Preguntas</li>
                  </ul>
                </div>
                <div>
                  <p>Peliculas y Series</p>
                </div>
                <div>
                  <ul>
                    <li>Vender</li>
                    <li>Resumen</li>
                    <li>Novedades</li>
                    <li>Publicaciones</li>
                    <li>Ventas</li>
                    <li>Publicidad</li>
                    <li>Facturación</li>
                    <li>Mercado Shops</li>
                  </ul>
                </div>
                <div>
                  <p>Mi perfil</p>
                </div>
                <button onClick={() => logoutHandler()}>Salir</button>
              </div>
            </div>
          </li>
          <li className='option'>
            <Link to='#'>
              <p>Mis Compras</p>
            </Link>
          </li>
          <li className='option '>
            Favoritos
            <MdKeyboardArrowDown className='arrow_icon' />
          </li>
          <li className='option'>
            <FiBell className='option__notification_icon' />
          </li>
        </ul>
      )}
      <div className='option cart_btn'>
        <Link to='/cart'>
          <GiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default UserOptions;
