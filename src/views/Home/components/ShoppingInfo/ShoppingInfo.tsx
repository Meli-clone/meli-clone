import useWindowSize from '@/hooks/useWindowSize';
import ShoppingInfoMobile from './components/ShoppingInfoMobile';

const ShoppingInfo = () => {
  const [width] = useWindowSize();

  if (width > 768) {
    return <p>Hola</p>;
  }

  return <ShoppingInfoMobile />;
};

export default ShoppingInfo;
