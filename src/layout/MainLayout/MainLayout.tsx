import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import HomePayment from '@/components/HomePayment';
import Descubre from '@/components/Descubre/Descubre';
import Footer from '../Footer';
import Header from '../Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <HomePayment />
      <Descubre />
      <PromotionsBanner />
      <Footer />
    </>
  );
};

export default MainLayout;
