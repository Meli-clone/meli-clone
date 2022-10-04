import './PurchaseDiscount.scss';

interface Prop {
  originalPrice: number;
  actualPrice: number;
}

const PurchaseDiscount = ({ originalPrice, actualPrice }: Prop) => {
  const discount = Math.round(100 - (actualPrice * 100) / originalPrice);

  return <span className='purchase_discount'>{discount}% OFF</span>;
};

export default PurchaseDiscount;
