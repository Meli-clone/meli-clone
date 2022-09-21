import { useEffect, useState } from 'react';
import boxImage from '@/assets/images/shopping-info-box.svg';
import cardImage from '@/assets/images/shopping-info-card.svg';
import protectImage from '@/assets/images/shopping-info-protect.svg';
import './ShoppingInfoMobile.scss';
import useWindowSize from '@/hooks/useWindowSize';
import ShoppingCard from './ShoppingCard';

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

const ShoppingInfoMobile = () => {
  const [shoppingData, setShoppingData] = useState<Array<ShoppingData>>([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchPageX, setTouchPageX] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const [slickDots, setSlickDots] = useState(1);

  const [width] = useWindowSize();

  useEffect(() => {
    setTouchPageX(-width);
  }, [width]);

  useEffect(() => {
    setShoppingData(SHOPPING_INFO_DATA);
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    setTouchStart(event.changedTouches[0].pageX - touchPageX);
  };

  const handleTouchEnd = () => {
    setIsTransition(true);

    const calcMove = Math.round(touchPageX / width) - touchPageX / width;
    const roundedSizeCard = Math.round(touchPageX / width) * width;

    let nextCard = 0;

    if (calcMove > 0.2) {
      nextCard = roundedSizeCard - width;
      setSlickDots(prevState => prevState + 1);
    } else if (calcMove < -0.2) {
      nextCard = roundedSizeCard + width;
      setSlickDots(prevState => prevState - 1);
    } else {
      nextCard = roundedSizeCard;
    }

    setTouchPageX(nextCard);
    setSlickDots(nextCard / -width);

    if (nextCard > -width) {
      setTimeout(() => {
        setTouchPageX(-width * 3);
      }, 300);
    }

    if (nextCard <= -width * 4) {
      setTimeout(() => {
        setTouchPageX(-width);
      }, 300);
    }

    setTimeout(() => {
      setIsTransition(false);
    }, 300);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    const touchMove = event.changedTouches[0].pageX;

    setTouchPageX(touchMove - touchStart);
  };

  const onScroll = {
    transform: `translateX(${touchPageX}px)`,
    transition: `${isTransition ? '300ms transform ease' : ''}`,
    width: `${width * 5}px`,
  };

  return (
    <section
      className='carousel_shopping_container'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className='carousel_shopping_slider' style={onScroll}>
        {shoppingData.map(e => (
          <ShoppingCard key={e.id} data={e} width={width} />
        ))}
      </div>
      <ul>
        <li>
          <button
            onClick={() => setTouchPageX(-width)}
            className={slickDots === 1 || slickDots >= 4 ? 'slick_active' : ''}
          />
        </li>
        <li>
          <button
            onClick={() => setTouchPageX(-width * 2)}
            className={slickDots === 2 ? 'slick_active' : ''}
          />
        </li>
        <li>
          <button
            onClick={() => setTouchPageX(-width * 3)}
            className={slickDots === 3 || slickDots <= 0 ? 'slick_active' : ''}
          />
        </li>
      </ul>
    </section>
  );
};

export default ShoppingInfoMobile;
