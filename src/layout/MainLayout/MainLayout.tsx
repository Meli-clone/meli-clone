import HomePayment from '@/components/HomePayment';
import ProductList from '@/components/ProductList';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <>
      <HomePayment/>
      <ProductList/>
      <Footer />
    </>
  );
};

export default MainLayout;
