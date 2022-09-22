import './ProductListCard.scss';
import { useState } from "react";

const ProductListCard = ({producto}) => {
  const [productHover, setProductHover] = useState(false);

  const handleMouseOver = () => {
    setProductHover(true);
  }

  const handleMouseOut = () => {
    setProductHover(false);
  }

  return(
        <div className="productListCard" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="productListCard_imageContainer">
                <img className="productListCard_image" src={producto.image} alt={producto.title}/>
            </div>
            <div className="productListCard_infoContainer">
              <h4 className="productListCard_price">$ {producto.price}</h4>
              <p className="productListCard_title" style={{opacity: productHover ? '1' : '0'}}>{producto.title}</p>
            </div>
        </div>
  ) ;
};

export default ProductListCard;
