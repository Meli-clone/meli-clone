import { useAppSelector } from '@/store/hooks';

//COMPONENTS
import UserProfile from './components/UserProfile';

//STYLES AND IMAGES
import './HamburgerMenu.scss';

//ICONS
import { IoHomeOutline, IoShirtOutline, IoEarthOutline } from 'react-icons/io5';
import { VscTag, VscNote } from 'react-icons/vsc';
import { BsClock } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';
import {
  BsBasket,
  BsShop,
  BsListUl,
  BsTag,
  BsDownload,
  BsBag,
  BsHeart,
  BsShopWindow,
} from 'react-icons/bs';
import { FiBell } from 'react-icons/fi';
import { GiClapperboard } from 'react-icons/gi';
import { TbUserCircle } from 'react-icons/tb';

function HamburgerMenu() {
  const { userLoggedIn } = useAppSelector(state => state.user.userInfo);

  return (
    <div className='hamburger_menu'>
      <div className='triangle'>{''}</div>
      <UserProfile />
      <div>
        <ul>
          <li>
            <a>
              <IoHomeOutline />
              Inicio
            </a>
          </li>
          {userLoggedIn && (
            <>
              <li>
                <a>
                  <FiBell />
                  Notificaciones
                </a>
              </li>
              <li>
                <a>
                  <BsBag />
                  Mis compras
                </a>
              </li>
              <li>
                <a>
                  <BsHeart />
                  Favoritos
                </a>
              </li>
            </>
          )}
          <li>
            <a>
              <VscTag />
              Ofertas
            </a>
          </li>
          {userLoggedIn && (
            <li>
              <a>
                <GiClapperboard />
                Peliculas y series
              </a>
            </li>
          )}
          <li>
            <a>
              <BsClock />
              Historial
            </a>
          </li>
          {userLoggedIn && (
            <li>
              <a>
                <TbUserCircle />
                Mi cuenta
              </a>
            </li>
          )}
          <li>
            <a>
              <MdSupportAgent />
              Ayuda/PQR
            </a>
          </li>
          {userLoggedIn && (
            <li>
              <a>
                <BsShopWindow />
                Mercado Shops
              </a>
            </li>
          )}
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a>
              <BsBasket />
              <span>Supermercado</span>
            </a>
          </li>
          <li>
            <a>
              <IoShirtOutline />
              Moda
            </a>
          </li>
          <li>
            <a>
              <IoEarthOutline />
              Compra Internacional
            </a>
          </li>
          <li>
            <a>
              <BsShop />
              Tiendas oficiales
            </a>
          </li>
          <li>
            <a>
              <BsListUl />
              Categorias
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a>
              <VscNote />
              Resumen
            </a>
          </li>
          <li>
            <a>
              <BsTag />
              Vender
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a>
              <BsDownload />
              ¡Compra y vende con la app!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
