import HomePayment from '@/components/HomePayment';
import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import Regret from './components/Regret';
import ShoppingInfo from './components/ShoppingInfo';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <PromotionsBanner />
      <HomePayment />
      <ShoppingInfo />
      <Regret />
    </div>
  );
};

export default Home;
