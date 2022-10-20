import './Home.scss';
import Descubre from './components/Descubre';
import HomePayment from './components/HomePayment';
import ProductList from './components/ProductList';
import PromotionsBanner from './components/PromotionsBanner';
import Regret from './components/Regret';
import ShoppingInfo from './components/ShoppingInfo';
import Slider from './components/Slider/Slider';
import PopularCategories from './components/PopularCategories';
import AddedCart from './components/AddedCart/AddedCart';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Planet Express';
  }, []);

  return (
    <div className='home_container'>
      <AddedCart />
      <Slider />
      <HomePayment />
      <ProductList />
      <PromotionsBanner />
      <Descubre />
      <PopularCategories />
      <ShoppingInfo />
      <Regret />
    </div>
  );
};

export default Home;
