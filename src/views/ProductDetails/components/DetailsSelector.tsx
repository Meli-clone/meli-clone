import './DetailsSelector.scss';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Product } from '../ProductDetails';

interface Prop {
  product: Product;
  quantity: number;
  handleQuantity(arg0: number): void;
  clicked: boolean;
  handleSelectClick(): void;
}

const DetailsSelector = ({
  product,
  handleQuantity,
  quantity,
  clicked,
  handleSelectClick,
}: Prop) => {
  return (
    <div className='detailsSelector'>
      <div
        className='detailsSelector_selectContainer'
        onClick={handleSelectClick}
      >
        <p className='detailsSelector_title'>Cantidad: </p>
        <p className='detailsSelector_value'>
          {quantity} {quantity === 1 ? 'unidad' : 'unidades'}
        </p>
        {clicked ? (
          <BiChevronUp className='select_icon' />
        ) : (
          <BiChevronDown className='select_icon' />
        )}
        <p className='detailsSelector_available'>
          ({product.available_quantity} disponibles)
        </p>
      </div>
      <div
        className={
          clicked
            ? 'detailsSelector_dropdown dropdown_active'
            : 'detailsSelector_dropdown'
        }
      >
        <div
          className='detailsSelector_dropdownContainer'
          onClick={() => handleQuantity(1)}
        >
          <div
            className={
              quantity === 1
                ? 'detailsSelector_blueSelect_active'
                : 'detailsSelector_blueSelect'
            }
          ></div>
          <p
            className={
              quantity === 1
                ? 'detailsSelector_value detailsSelector_value_active'
                : 'detailsSelector_value'
            }
          >
            1 unidad
          </p>
        </div>
        {product.available_quantity >= 2 && (
          <div
            className='detailsSelector_dropdownContainer'
            onClick={() => handleQuantity(2)}
          >
            <div
              className={
                quantity === 2
                  ? 'detailsSelector_blueSelect_active'
                  : 'detailsSelector_blueSelect'
              }
            ></div>
            <p
              className={
                quantity === 2
                  ? 'detailsSelector_value detailsSelector_value_active'
                  : 'detailsSelector_value'
              }
            >
              2 unidades
            </p>
          </div>
        )}
        {product.available_quantity >= 3 && (
          <div
            className='detailsSelector_dropdownContainer'
            onClick={() => handleQuantity(3)}
          >
            <div
              className={
                quantity === 3
                  ? 'detailsSelector_blueSelect_active'
                  : 'detailsSelector_blueSelect'
              }
            ></div>
            <p
              className={
                quantity === 3
                  ? 'detailsSelector_value detailsSelector_value_active'
                  : 'detailsSelector_value'
              }
            >
              3 unidades
            </p>
          </div>
        )}
        {product.available_quantity >= 4 && (
          <div
            className='detailsSelector_dropdownContainer'
            onClick={() => handleQuantity(4)}
          >
            <div
              className={
                quantity === 4
                  ? 'detailsSelector_blueSelect_active'
                  : 'detailsSelector_blueSelect'
              }
            ></div>
            <p
              className={
                quantity === 4
                  ? 'detailsSelector_value detailsSelector_value_active'
                  : 'detailsSelector_value'
              }
            >
              4 unidades
            </p>
          </div>
        )}
        {product.available_quantity >= 5 && (
          <div
            className='detailsSelector_dropdownContainer'
            onClick={() => handleQuantity(5)}
          >
            <div
              className={
                quantity === 5
                  ? 'detailsSelector_blueSelect_active'
                  : 'detailsSelector_blueSelect'
              }
            ></div>
            <p
              className={
                quantity === 5
                  ? 'detailsSelector_value detailsSelector_value_active'
                  : 'detailsSelector_value'
              }
            >
              5 unidades
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsSelector;
