import "./ProductList.scss";
import ProductListCard from './components/ProductListCard';

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
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 3,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 4,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
  {
    item_id: 5,
    title: 'Samsung Galaxy A22 5G 128 GB gray 4 GB RAM',
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
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
    image: 'https://http2.mlstatic.com/D_NQ_NP_863356-MLA48697556226_122021-O.webp',
    price: '59.000'
  },
];

const ProductList = () => {

  return(
    <section className="productList">
      <div>
        <h2 className="productList_title">Basado en tu última visita</h2>
        <a className="productList_viewmore">Ver historial</a>
      </div>
      <div className="productList_gridContainer">
      {PRODUCTS_LIST.map((item, index) => {
        return(
          <ProductListCard key={index} producto={item}/>
        )
      })}
      </div>
    </section>
  );
};

export default ProductList;