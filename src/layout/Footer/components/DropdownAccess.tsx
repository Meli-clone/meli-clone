import './DropdownAccess.scss';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ACCESS_LIST = [
  {
    title: 'Acerca de',
    items: [
      {
        name: 'Mercado Libre',
        href: '#',
      },
      {
        name: 'Investor relations',
        href: '#',
      },
      {
        name: 'Tendencias',
        href: '#',
      },
      {
        name: 'Sustentabilidad',
        href: '#',
      },
    ],
  },
  {
    title: 'Otros sitios',
    items: [
      {
        name: 'Developers',
        href: '#',
      },
      {
        name: 'Mercado Pago',
        href: '#',
      },
      {
        name: 'Mercado Shop',
        href: '#',
      },
      {
        name: 'Mercado Envíos',
        href: '#',
      },
      {
        name: 'Mercado Ads',
        href: '#',
      },
      {
        name: 'Mercado Libre Ideas',
        href: '#',
      },
    ],
  },
  {
    title: 'Ayuda',
    items: [
      {
        name: 'Comprar',
        href: '#',
      },
      {
        name: 'Vender',
        href: '#',
      },
      {
        name: 'Resolución de problemas',
        href: '#',
      },
      {
        name: 'Centro de seguridad',
        href: '#',
      },
    ],
  },
  {
    title: 'Redes sociales',
    items: [
      {
        name: 'Twitter',
        href: 'https://twitter.com/ML_Argentina',
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/MercadoLibre',
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/mercadolibre.arg/',
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/user/mercadolibre',
      },
    ],
  },
  {
    title: 'Mi cuenta',
    items: [
      {
        name: 'Ingresa',
        href: '#',
      },
      {
        name: 'Vender',
        href: '#',
      },
    ],
  },
  {
    title: 'Mercado Puntos',
    items: [
      {
        name: 'Nivel 6',
        href: '#',
      },
      {
        name: 'Disney+',
        href: '#',
      },
      {
        name: 'Star+',
        href: '#',
      },
      {
        name: 'HBO MAX',
        href: '#',
      },
      {
        name: 'Paramount+',
        href: '#',
      },
    ],
  },
];

const DropdownAccess = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div
      className={`nav_dropdown_access ${isOpen ? 'open' : ''}`}
      data-testid='nav_dropdown_access'
    >
      <button
        name='dropdown_switch'
        className='dropdown_switch'
        onClick={handleSwitch}
      >
        Más información
        <div className='icon'>
          <MdKeyboardArrowDown />
        </div>
      </button>
      <div className='dropdown_content'>
        <nav className='nav_dropdown_content'>
          <ul className='list_dropdown_content'>
            {ACCESS_LIST.map(e => {
              return (
                <li key={e.title}>
                  <h5>{e.title}</h5>
                  {e.items.map(i => (
                    <a key={i.name} href={i.href}>
                      {i.name}
                    </a>
                  ))}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownAccess;
