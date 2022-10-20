import './ProductListCard.scss';
import { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface Products {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
}

interface Props {
  producto: Products;
}

const ProductListCard = ({ producto }: Props) => {
  const [productHover, setProductHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setProductHover(true);
  };

  const handleMouseOut = () => {
    setProductHover(false);
  };

  const handleClickProduct = (id: string) => {
    navigate(`/product_details/${id}`);
  };

  return (
    <div
      className='productListCard'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => handleClickProduct(producto.id.toString())}
    >
      <button
        className='productListCard_button'
        style={{ opacity: productHover ? '1' : '0' }}
      >
        <BsHeart className='productListCard_icon' />
      </button>
      <div className='productListCard_imageContainer'>
        <img
          className='productListCard_image'
          src={producto.thumbnail}
          alt={producto.title}
        />
      </div>
      <div className='productListCard_infoContainer'>
        <h4 className='productListCard_price'>$ {producto.price}</h4>
        <p
          className='productListCard_title'
          style={{ opacity: productHover ? '1' : '0' }}
        >
          {producto.title}
        </p>
      </div>
    </div>
  );
};

export default ProductListCard;
