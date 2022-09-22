import { useState, useEffect } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import ShoppingInfoMobile from './components/ShoppingInfoMobile';
import boxImage from '@/assets/images/shopping-info-box.svg';
import cardImage from '@/assets/images/shopping-info-card.svg';
import protectImage from '@/assets/images/shopping-info-protect.svg';
import ShoppingInfoDesktop from './components/ShoppingInfoDesktop';

const SHOPPING_INFO_DATA = [
  {
    id: 0,
    img: protectImage,
    altimg: 'Escudo',
    title: 'Seguridad, de principio a fin',
    description:
      '¿No te gusta? ¡Devolvelo! En Mercado Libre no hay nada que no puedas hacer, porque estás siempre protegido.',
    link: {
      label: 'Cómo te protegemos',
      href: '#',
    },
  },
  {
    id: 1,
    img: cardImage,
    altimg: 'Tarjeta',
    title: 'Elige como pagar',
    description:
      'Puedes pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.',
    link: {
      label: 'Cómo pagar tus compras',
      href: '#',
    },
  },

  {
    id: 2,
    img: boxImage,
    altimg: 'Caja',
    title: 'Envío gratis desde $5.500',
    description:
      'Solo por estar registrado en Mercado Libre tienes envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.',
    link: {
      label: 'Conoce más sobre este beneficio',
      href: '#',
    },
  },
  {
    id: 3,
    img: protectImage,
    altimg: 'Escudo',
    title: 'Seguridad, de principio a fin',
    description:
      '¿No te gusta? ¡Devolvelo! En Mercado Libre no hay nada que no puedas hacer, porque estás siempre protegido.',
    link: {
      label: 'Cómo te protegemos',
      href: '#',
    },
  },

  {
    id: 4,
    img: cardImage,
    altimg: 'Tarjeta',
    title: 'Elige como pagar',
    description:
      'Puedes pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.',
    link: {
      label: 'Cómo pagar tus compras',
      href: '#',
    },
  },
];
interface ShoppingData {
  id: number;
  img: string;
  altimg: string;
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
}

const ShoppingInfo = () => {
  const [shoppingData, setShoppingData] = useState<Array<ShoppingData>>([]);
  const [width] = useWindowSize();

  useEffect(() => {
    setShoppingData(SHOPPING_INFO_DATA);
  }, []);

  if (width > 768) {
    return <ShoppingInfoDesktop shoppingData={shoppingData} width={width} />;
  }

  return <ShoppingInfoMobile shoppingData={shoppingData} />;
};

export default ShoppingInfo;
