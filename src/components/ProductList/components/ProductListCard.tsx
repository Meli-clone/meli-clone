import './ProductListCard.scss';

const ProductListCard = ({producto}) => {
  return(
        <div className="productListCard">
            <div className="productListCard_imageContainer">
                <img className="productListCard_image" src={producto.image} alt={producto.title}/>
            </div>
        </div>
  ) ;
};

export default ProductListCard;
