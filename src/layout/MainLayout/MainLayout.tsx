import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import HomePayment from '@/components/HomePayment';
import Descubre from '@/components/Descubre/Descubre';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <>
      <HomePayment/>
      <Descubre/>
      <PromotionsBanner />
      <Footer />
    </>
  );
};

export default MainLayout;
