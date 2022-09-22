import './Home.scss';
import Descubre from './components/Descubre';
import HomePayment from './components/HomePayment';
import PromotionsBanner from './components/PromotionsBanner';
import Regret from './components/Regret';
import ShoppingInfo from './components/ShoppingInfo';
import Slider from './components/Slider/Slider';

const Home = () => {
  return (
    <div className='home_container'>
      <Slider />
      <HomePayment />
      <PromotionsBanner />
      <Descubre />
      <ShoppingInfo />
      <Regret />
    </div>
  );
};

export default Home;
