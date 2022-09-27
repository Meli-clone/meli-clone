import './PurchaseDiscount.scss';

interface Prop {
  discount: number;
}

const PurchaseDiscount = ({ discount }: Prop) => {
  return <span className='purchase_discount'>{discount * 100}% OFF</span>;
};

export default PurchaseDiscount;
