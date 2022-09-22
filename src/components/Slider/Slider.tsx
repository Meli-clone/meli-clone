import './Slider.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Image {
  url: string;
  alt: string;
  to: string;
}

const INITIAL_STATE = [
  {
    alt: 'Imagen1',
    to: '/',
    url: 'https://http2.mlstatic.com/D_NQ_984744-MLA51575658259_092022-OO.webp',
  },
  {
    alt: 'Imagen2',
    to: '/',
    url: 'https://http2.mlstatic.com/D_NQ_804382-MLA51014059401_082022-OO.webp',
  },
  {
    alt: 'Imagen3',
    to: '/',
    url: 'https://http2.mlstatic.com/D_NQ_747500-MLA51575508136_092022-OO.webp',
  },
  {
    alt: 'Imagen4',
    to: '/',
    url: 'https://http2.mlstatic.com/D_NQ_712428-MLA51560794828_092022-OO.webp',
  },
  {
    alt: 'Imagen5',
    to: '/',
    url: 'https://http2.mlstatic.com/D_NQ_925605-MLA51183881425_082022-OO.webp',
  },
];

interface Dimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): Dimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<Dimensions>(
    getWindowDimensions(),
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

const Slider = () => {
  const { width } = useWindowDimensions();
  const [listImages, setListImages] = useState<Array<Image>>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setListImages(INITIAL_STATE);
  }, []);

  const handleTest = (action: 'next' | 'prev') => {
    if (action == 'prev') {
      const newIndex = index + 1;

      if (newIndex > 0) {
        return setIndex(-(listImages.length - 1));
      }

      setIndex(newIndex);
    }

    if (action == 'next') {
      const newIndex = index - 1;

      if (newIndex <= -listImages.length) {
        return setIndex(0);
      }

      setIndex(newIndex);
    }
  };

  return (
    <div className='slider_container'>
      <div className='slider_wrapper'>
        <div
          className='slider_container_images'
          style={{
            transform: `translateX(${index * width}px)`,
            width: `${listImages.length * width}px`,
          }}
        >
          {listImages.map((element, i) => {
            return (
              <div
                key={i}
                className='slider_content_image'
                style={{ width: `${width}px` }}
              >
                <Link to={element.to}>
                  <img
                    className='slider_image'
                    src={element.url}
                    alt={element.alt}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <button
          className='slider_button slider_button--prev'
          onClick={() => handleTest('prev')}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='rgba(0, 0, 0, 0.9)'
          >
            <path
              d='M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z'
              fill='rgba(0, 0, 0, 0.9)'
            ></path>
          </svg>
        </button>
        <button
          className='slider_button slider_button--next'
          onClick={() => handleTest('next')}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='rgba(0, 0, 0, 0.9)'
          >
            <path
              d='M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z'
              fill='rgba(0, 0, 0, 0.9)'
            ></path>
          </svg>
        </button>

        <ul className='slider_pagination'>
          {listImages.map((_, i) => {
            return (
              <li key={i} className='slider_pagination_item'>
                <button
                  onClick={() => setIndex(-i)}
                  className={`slider_pagination_button${
                    i == index * -1 ? ' slider_pagination_button--active' : ''
                  }`}
                ></button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
