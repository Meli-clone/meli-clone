import './ProductListCard.scss';
import { useState } from "react";
import { BsHeart } from 'react-icons/bs';

interface Products {
  item_id: number
  title: string
  image: string
  price: string
}

interface Props {
  producto: Products
  /* translate: number */
}

const ProductListCard = ({producto/* , translate */}: Props) => {
  const [productHover, setProductHover] = useState(false);

  const handleMouseOver = () => {
    setProductHover(true);
  }

  const handleMouseOut = () => {
    setProductHover(false);
  }

  return(
  <div className="productListCard" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} /* style={{ transform: `translateX(${translate}px)` }} */>
      <button className="productListCard_button" style={{opacity: productHover ? '1' : '0'}}><BsHeart className="productListCard_icon"/></button>
      <div className="productListCard_imageContainer">
          <img className="productListCard_image" src={producto.image} alt={producto.title}/>
      </div>
      <div className="productListCard_infoContainer">
        <h4 className="productListCard_price">$ {producto.price}</h4>
        <p className="productListCard_title" style={{opacity: productHover ? '1' : '0'}}>{producto.title}</p>
      </div>
  </div>
  );
};

export default ProductListCard;
