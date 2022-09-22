import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import HomePayment from '@/components/HomePayment';
import Footer from '../Footer';
import Slider from '@/components/Slider/Slider';

const MainLayout = () => {
  return (
    <>
      <Slider />
      <PromotionsBanner />
      <HomePayment />
      <Footer />
    </>
  );
};

export default MainLayout;
