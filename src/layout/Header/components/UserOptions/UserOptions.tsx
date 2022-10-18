import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { useAppDispatch } from '@/store/hooks';

//COMPONENTS AND FUNCTIONS
import { setUserInfo } from '@/store/user/user.slice';
import LogOutBtn from '@/layout/components/LogOutBtn/LogOutBtn';

//STYLES AND IMAGES
import './UserOptions.scss';

//ICONS
import { GiShoppingCart } from 'react-icons/gi';
import { TbUserCircle } from 'react-icons/tb';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiBell } from 'react-icons/fi';

const UserOptions = () => {
  const { userLoggedIn, username, userImage } = useAppSelector(
    state => state.user.userInfo,
  );
  const carrito = useAppSelector(state => state.cart.value);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

    if (userInfo) {
      dispatch(setUserInfo(userInfo));
    }
  }, []);

  const handleQuantityCart = () => {
    let total = 0;
    carrito.map(item => {
      total += item.quantity;
    });
    return total;
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
              {userImage ? (
                <img src={userImage} className='profile_picture' />
              ) : (
                <TbUserCircle className='profile_icon' />
              )}
              <p>{username.split(' ')[0]}</p>
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
                <LogOutBtn />
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
        {carrito.length >= 1 && (
          <div className='cart_spanDiv'>
            <span className='cart_span'>{handleQuantityCart()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserOptions;
