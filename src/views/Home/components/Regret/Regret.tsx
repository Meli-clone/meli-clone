import { useEffect, useState } from 'react';
import './Regret.scss';

interface RegretList {
  description: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const REGRET_DATA = [
  {
    description: 'Botón de arrepentimiento',
    links: [
      {
        label: 'Cancelar una compra',
        href: '#',
      },
      {
        label: 'Cancelar una suscripción',
        href: '#',
      },
      {
        label: 'Cancelar un seguro o garantía',
        href: '#',
      },
    ],
  },
  {
    description: 'Conocé las normas que aplican cuando comprás',
    links: [
      {
        label:
          'Ver contratos de adhesión - Ley N.° 24.240 de Defensa del Consumir',
        href: '#',
      },
    ],
  },
];

const RegretBox = ({ description, links }: RegretList) => {
  return (
    <div className='box_container'>
      <p>{description}</p>
      {links.map(link => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
};

const Regret = () => {
  const [regret, setRegret] = useState<Array<RegretList>>([]);

  useEffect(() => {
    setRegret(REGRET_DATA);
  }, []);

  return (
    <div className='regret'>
      <section className='regret_container'>
        {regret.map(e => (
          <RegretBox
            key={e.description}
            description={e.description}
            links={e.links}
          />
        ))}
      </section>
    </div>
  );
};

export default Regret;
