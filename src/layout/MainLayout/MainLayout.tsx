import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import HomePayment from '@/components/HomePayment';
import ProductList from '@/components/ProductList';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <>
      <HomePayment/>
      <ProductList/>
      <PromotionsBanner />
      <Footer />
    </>
  );
};

export default MainLayout;
