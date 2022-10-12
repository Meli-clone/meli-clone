import { useState } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { CategoryData } from '../PopularCategories';
import CardPopularCategories from './CardPopularCategories';
import './PopularCategoriesDesktop.scss';

interface Props {
  categoryList: Array<CategoryData>;
  width: number;
}

const PopularCategoriesDesktop = ({ categoryList, width }: Props) => {
  const [categoriesDisplay, setCategoriesDisplay] = useState(0);
  const [arrowLeftDisabled, setArrowLeftDisabled] = useState(true);
  const [arrowRightDisabled, setArrowRightDisabled] = useState(false);

  const getColumnSize = () => {
    const minWidth = 170;
    const widthDisplay = width > 1200 ? 1200 : width;

    const numberOfColumns = Math.trunc(widthDisplay / minWidth);
    // 0.9375 -> value of quantity gap divide columns (15/16)
    return widthDisplay / numberOfColumns - 15 / 16;
  };

  const handleChangeCategories = (action: 'next' | 'previous') => {
    const columnSize = getColumnSize();
    const widthDisplay = width < 1200 ? width : 1200;

    if (action === 'previous') {
      setArrowRightDisabled(false);

      setCategoriesDisplay(prevState => {
        if (prevState + widthDisplay >= 0) {
          setArrowLeftDisabled(true);
          return 0;
        }

        return prevState + widthDisplay;
      });
    }

    if (action === 'next') {
      setCategoriesDisplay(prevState => {
        const newDisplay = prevState - widthDisplay;
        const nextDisplay = prevState - widthDisplay * 2;
        const displayAvailable = columnSize * 16;

        setArrowLeftDisabled(false);

        if (-nextDisplay >= displayAvailable) {
          setArrowRightDisabled(true);
          // 15 --> total gap size
          return newDisplay - (nextDisplay + displayAvailable) - 15;
        }

        return newDisplay;
      });
    }
  };

  const columnStyle = {
    width: `${getColumnSize()}px`,
  };

  const displayStyle = {
    width: '4500px',
    transform: `translateX(${categoriesDisplay}px)`,
    transition: 'transform 300ms ease',
  };

  return (
    <>
      <div className='category_buttons'>
        <button
          className='category_button previous_button'
          onClick={() => handleChangeCategories('previous')}
          disabled={arrowLeftDisabled}
        >
          {<MdOutlineArrowBackIosNew />}
        </button>
        <button
          className='category_button next_button'
          onClick={() => handleChangeCategories('next')}
          disabled={arrowRightDisabled}
        >
          {<MdOutlineArrowBackIosNew />}
        </button>
      </div>
      <div className='category_list_desktop_container'>
        <div className='wrapper' style={displayStyle}>
          <ul className='category_list_desktop'>
            {categoryList.map((card, index, array) => {
              if (index % 2 === 0) {
                return (
                  <div key={card.id} className='column' style={columnStyle}>
                    <CardPopularCategories {...card} />
                    <CardPopularCategories {...array[index + 1]} />
                  </div>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PopularCategoriesDesktop;
