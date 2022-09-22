import { useEffect, useState } from 'react';
import './ShoppingInfoMobile.scss';
import useWindowSize from '@/hooks/useWindowSize';
import ShoppingCard from './ShoppingCard';
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

interface Prop {
  shoppingData: Array<ShoppingData>;
}

const ShoppingInfoMobile = ({ shoppingData }: Prop) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchPageX, setTouchPageX] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const [slickDots, setSlickDots] = useState(1);

  const [width] = useWindowSize();

  useEffect(() => {
    setTouchPageX(-width);
  }, [width]);

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

  const handleSlick = (newPageXValue: number, newSlickValue: number) => {
    setTouchPageX(newPageXValue * newSlickValue);
    setSlickDots(newSlickValue);
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
            onClick={() => handleSlick(-width, 1)}
            className={slickDots === 1 || slickDots >= 4 ? 'slick_active' : ''}
          />
        </li>
        <li>
          <button
            onClick={() => handleSlick(-width, 2)}
            className={slickDots === 2 ? 'slick_active' : ''}
          />
        </li>
        <li>
          <button
            onClick={() => handleSlick(-width, 3)}
            className={slickDots === 3 || slickDots <= 0 ? 'slick_active' : ''}
          />
        </li>
      </ul>
    </section>
  );
};

export default ShoppingInfoMobile;
