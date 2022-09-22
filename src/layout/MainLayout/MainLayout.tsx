import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import HomePayment from '@/components/HomePayment';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <>
      <PromotionsBanner />
      <HomePayment />
      <Footer />
    </>
  );
};

export default MainLayout;
