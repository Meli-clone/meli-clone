import './ShoppingCard.scss';

interface ShoppingData {
  id: number;
  img: string;
  altimg: string;
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
}

interface PropsCardShopping {
  data: ShoppingData;
  width: number;
}

const ShoppingCard = ({ data }: PropsCardShopping) => {
  return (
    <div className='carousel_shopping_card'>
      <img src={data.img} alt={`Imagen de ${data.altimg}`} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <a href={data.link.href}>{data.link.label}</a>
    </div>
  );
};

export default ShoppingCard;
