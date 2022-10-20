import { useState, useEffect } from 'react';
import './ProductList.scss';
import ProductListCard from './components/ProductListCard';
import useWindowSize from '@/hooks/useWindowSize';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { getCategory } from '@/services/category/category.service';

interface Products {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
}

const ProductList = () => {
  const [productos, setProductos] = useState<Array<Products>>([]);
  const [translate, setTranslate] = useState(0);

  const [width] = useWindowSize();

  useEffect(() => {
    getProducts();
    handleWidth();
  }, [width]);

  const getProducts = async () => {
    const res = await getCategory('MLA1051');
    const sliceProducts = res.data.results.slice(0, 10);
    setProductos(sliceProducts);
  };

  const handleButtonRight = () => {
    setTranslate(prevState => prevState - handleWidth() - 16);
  };

  const handleButtonLeft = () => {
    if (translate !== 0) {
      setTranslate(prevState => prevState + handleWidth() + 16);
    }
  };

  const handleWidth = () => {
    if (width > 1200) {
      return 1200;
    }
    return width;
  };

  return (
    <section className='productList'>
      <div
        className='productList_container'
        style={{ width: `${handleWidth()}px` }}
      >
        <div>
          <h2 className='productList_title'>Lo último en celulares</h2>
          <a className='productList_viewmore'>Ver más</a>
        </div>

        <button
          className='productList_buttons button_right'
          onClick={handleButtonLeft}
          style={{ visibility: translate >= 0 ? 'hidden' : 'visible' }}
        >
          <FcPrevious className='productList_icon' />
        </button>
        <button
          className='productList_buttons button_left'
          onClick={handleButtonRight}
          style={{
            visibility:
              translate * -1 >= (224 * productos.length) / 2
                ? 'hidden'
                : 'visible',
          }}
        >
          <FcNext className='productList_icon' />
        </button>

        <div className='productList_slider'>
          <div
            className='productList_gridContainer'
            style={{
              transform: `translateX(${translate}px)`,
              width: `${handleWidth()}px`,
            }}
          >
            {productos.map((item, index) => {
              return <ProductListCard key={index} producto={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
