import { useEffect, useState } from 'react';
import DropdownAccess from './components/DropdownAccess';
import './Footer.scss';
import logo from '@/assets/images/planet-express.png';

interface Link {
  children: string;
  href: string;
}

const LINK_LIST = [
  {
    children: 'Mi cuenta',
    href: '',
  },
  {
    children: 'Mis compras',
    href: '',
  },
  {
    children: 'Historial',
    href: '',
  },
  {
    children: 'Ofertas',
    href: '',
  },
  {
    children: 'Favoritos',
    href: '',
  },
  {
    children: 'Tiendas oficiales',
    href: '',
  },
  {
    children: 'Categorías',
    href: '',
  },
  {
    children: 'Mercado Puntos',
    href: '',
  },
  {
    children: 'Ayuda',
    href: '',
  },
  {
    children: 'Vender',
    href: '',
  },
];

const LINK_WRAPPER_LIST = [
  {
    children: 'Términos y condiciones',
    href: '',
  },
  {
    children: 'Cómo cuidamos tu privacidad',
    href: '',
  },
  {
    children: 'Acesibilidad',
    href: '',
  },
  {
    children: 'Información al usuario financiero',
    href: '',
  },
  {
    children: 'Defensa del Consumidor',
    href: '',
  },
  {
    children: 'Información sobre seguros',
    href: '',
  },
];

const Footer = () => {
  const [liks, setLiks] = useState<Array<Link>>([]);

  useEffect(() => {
    setLiks(LINK_LIST);
  }, []);

  return (
    <footer className='nav_footer'>
      <DropdownAccess />
      <div className='nav_footer_donwloadapp_banner'>
        <a href='#' className='nav_footer_downloadapp'>
          <div className='nav_icon_downloadapp'>
            <img src={logo} alt='Logo Planet Express' />
          </div>
          <span>¡Compra y vende con la app!</span>
        </a>
      </div>
      <div className='nav_footer_mobile_links_bounds'>
        <div className='nav_footer_mobile_links'>
          {liks.map(link => {
            const { children, href } = link;

            return (
              <a key={children} href={href}>
                {children}
              </a>
            );
          })}
        </div>
      </div>
      <div className='nav_footer_user_info'>
        <p className='nav_footer_user'>
          <a href='#' className='nav_footer_login'>
            Ingresa
          </a>
          <a href='#' className='nav_footer_registration'>
            Crea tu cuenta
          </a>
        </p>
        <div className='nav_footer_navigation_container'>
          <nav className='nav_footer_navigation'>
            {LINK_WRAPPER_LIST.map(link => {
              const { children, href } = link;

              return (
                <a key={children} href={href}>
                  {children}
                </a>
              );
            })}
          </nav>
          <small className='nav_footer_copyright'>
            © 1999-2022 MercadoLibre S.R.L.
          </small>
          <p className='nav_footer_secondaryinfo'>
            Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
