import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import CardPopularCategories from './CardPopularCategories';
import './PopularCategoriesDesktop.scss';

interface CategoryData {
  icon: string;
  title: string;
}

interface Props {
  categoryList: Array<CategoryData>;
  width: number;
}

const PopularCategoriesDesktop = ({ categoryList, width }: Props) => {
  const getColumnSize = () => {
    const minWidth = 170;

    if (width >= 1200) {
      const numberOfColumns = Math.trunc(1200 / minWidth);

      // 0.9375 -> value of quantity gap divide columns (15/16)
      return 1200 / numberOfColumns - 0.9375;
    }

    const numberOfColumns = Math.trunc(width / minWidth);
    return width / numberOfColumns;
  };

  const handleChangeCategories = (action: 'next' | 'previous') => {
    const columnSize = getColumnSize();

    if (action === 'next') {
      if (width >= 1200) return -1200;
      return -width;
    }

    if (width >= 1200) return 1200;
    return width;
  };

  const columnStyle = {
    width: `${getColumnSize()}px`,
    transform: `translateX(${handleChangeCategories('next')}px)`,
  };

  return (
    <>
      <div className='category_buttons'>
        <button className='category_button previous_button'>
          {<MdOutlineArrowBackIosNew />}
        </button>
        <button className='category_button next_button'>
          {<MdOutlineArrowBackIosNew />}
        </button>
      </div>
      <div className='category_list_desktop_container'>
        <div className='wrapper' style={{ width: '4500px' }}>
          <ul className='category_list_desktop'>
            {categoryList.map((card, index, array) => {
              if (index % 2 === 0) {
                return (
                  <div key={card.title} className='column' style={columnStyle}>
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
