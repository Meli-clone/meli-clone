import './DropdownAccess.scss';
import { useState } from 'react';

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
        href: '#',
      },
      {
        name: 'Facebook',
        href: '#',
      },
      {
        name: 'Instagram',
        href: '#',
      },
      {
        name: 'YouTube',
        href: '#',
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
    <div className={`nav_dropdown_access ${isOpen ? 'open' : ''}`}>
      <label className='dropdown_switch' onClick={handleSwitch}>
        Más información
        <div>↑</div>
      </label>
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
