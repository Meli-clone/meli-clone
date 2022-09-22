import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import HomePayment from '@/components/HomePayment';
import Footer from '../Footer';
import Header from '@/components/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <PromotionsBanner />
      <HomePayment />
      <Footer />
    </>
  );
};

export default MainLayout;
