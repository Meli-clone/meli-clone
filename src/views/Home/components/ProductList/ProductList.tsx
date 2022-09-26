import { useState, useEffect } from "react";
import "./ProductList.scss";
import ProductListCard from './components/ProductListCard';
import useWindowSize from '@/hooks/useWindowSize';
import { FcNext, FcPrevious } from 'react-icons/fc';

const PRODUCTS_LIST = [
  {
    item_id: 1,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM aaaaaaaaaaaaaaaaaaaaa aaaa aa asdas das d',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 2,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_Q_NP_878776-MLA48428092348_122021-AB.webp',
    price: '59.000'
  },
  {
    item_id: 3,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_Q_NP_917545-MLA50401654103_062022-AB.webp',
    price: '59.000'
  },
  {
    item_id: 4,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_Q_NP_910138-MLA50911770573_072022-AB.webp',
    price: '59.000'
  },
  {
    item_id: 5,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_Q_NP_963008-MLA50999956957_082022-AB.webp',
    price: '59.000'
  },
  {
    item_id: 6,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 7,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 8,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 9,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 10,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_Q_NP_737913-MLA49433851234_032022-AB.webp',
    price: '89.000'
  },
];

interface Products {
  item_id: number
  title: string
  image: string
  price: string
}

const ProductList = () => {
  const [productos, setProductos] = useState<Array<Products>>([]);
  const [translate, setTranslate] = useState(0);

  const [width] = useWindowSize();

  useEffect(() => {
    setProductos(PRODUCTS_LIST);
    handleWidth();
  }, [width]);

  const handleButtonRight = () => {
    setTranslate(prevState => prevState - handleWidth() - 16);
  }

  const handleButtonLeft = () => {
    if(translate !== 0){
      setTranslate(prevState => prevState + handleWidth() + 16);
    }
  }

  const handleWidth = () => {
    if(width > 1200){
      return 1200
    }
    return width
  }

  return(
    <section className="productList">
      <div className="productList_container" style={{width: `${handleWidth()}px`}}>

      <div>
        <h2 className="productList_title">Basado en tu última visita</h2>
        <a className="productList_viewmore">Ver historial</a>
      </div>

        <button className="productList_buttons button_right" onClick={handleButtonLeft} style={{visibility: (translate >= 0) ? 'hidden' : 'visible' }}>
          <FcPrevious className="productList_icon"/>
        </button>
        <button className="productList_buttons button_left" onClick={handleButtonRight} style={{visibility: (translate*-1 >= (224*productos.length) / 2) ? 'hidden' : 'visible' }}>
          <FcNext className="productList_icon"/>
        </button>

      <div className="productList_slider">
        <div className="productList_gridContainer" style={{ transform: `translateX(${translate}px)`, width: `${handleWidth()}px`}}>
          {productos.map((item, index) => {
            return(
              <ProductListCard key={index} producto={item}/>
            )
          })}
        </div>
      </div>

      </div>
    </section>
  );
};

export default ProductList;