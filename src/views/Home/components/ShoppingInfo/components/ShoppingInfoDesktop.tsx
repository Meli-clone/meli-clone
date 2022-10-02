import ShoppingCard from './ShoppingCard';
import './ShoppingInfoDesktop.scss';

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

interface Props {
  shoppingData: Array<ShoppingData>;
  width: number;
}

const ShoppingInfoDesktop = ({ shoppingData }: Props) => {
  return (
    <section className='shopping_info_desktop_container'>
      <div className='shopping_info_desktop'>
        {shoppingData
          .filter((e, i, array) => i !== 0 && i !== array.length - 1)
          .map(e => (
            <ShoppingCard key={e.id} data={e} width={100} />
          ))}
      </div>
    </section>
  );
};

export default ShoppingInfoDesktop;
