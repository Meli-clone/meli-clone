import Home from '@/views/Home';
import HomePayment from '@/components/HomePayment';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <>
      <HomePayment />
      <Home />
      <Footer />
    </>
  );
};

export default MainLayout;
