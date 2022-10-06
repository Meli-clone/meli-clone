import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { useAppDispatch } from '@/store/hooks';

//ICONS
import { BsCart2 } from 'react-icons/bs';
import { TbUserCircle } from 'react-icons/tb';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiBell } from 'react-icons/fi';
import { logout } from '@/store/user/user.slice';

const UserOptions = () => {
  const { userLoggedIn, username } = useAppSelector(
    state => state.user.userInfo,
  );

  const dispatch = useAppDispatch();

  return (
    <div className='header__user_options'>
      {!userLoggedIn ? (
        <div className='header__user_options__user'>
          <Link to='/register'>Crea tu cuenta</Link>
          <Link to='/login'>Ingresa</Link>
          <a href='#'>Mis compras</a>
        </div>
      ) : (
        <div className='header__user_options__user'>
          <div className='option'>
            <div className='option__user_menu'>
              <TbUserCircle className='user_profile_picture' />
              {username}
              <MdKeyboardArrowDown />
              <div className='user_nav'>
                <ul>
                  <li>Compras</li>
                  <li>Preguntas</li>
                </ul>
                <div>
                  <p>Peliculas y Series</p>
                </div>
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
                <div>
                  <p>Mi perfil</p>
                </div>
                <button onClick={() => dispatch(logout())}>Salir</button>
              </div>
            </div>
          </div>
          <Link to='#' className='option'>
            Mis Compras
          </Link>
          <div className='option '>
            Favoritos
            <MdKeyboardArrowDown />
          </div>
          <div className='option'>
            <FiBell className='option__notification_icon' />
          </div>
        </div>
      )}

      <Link to='/cart' className='user_options__car_btn'>
        <BsCart2 />
      </Link>
    </div>
  );
};

export default UserOptions;
