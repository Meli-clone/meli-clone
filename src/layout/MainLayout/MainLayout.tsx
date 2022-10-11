<<<<<<< HEAD
<<<<<<< HEAD
import PromotionsBanner from '@/components/PromotionsBanner/PromotionsBanner';
import HomePayment from '@/components/HomePayment';
<<<<<<< HEAD
import ProductList from '@/components/ProductList';
=======
import Descubre from '@/components/Descubre/Descubre';
>>>>>>> 6d85a498aa3b185b9052d93d5c7a885107e24f6f
=======
import Home from '@/views/Home';
>>>>>>> 2603e18e10290a099f4a36797664ccb4fdf41f6b
=======
import { Outlet } from 'react-router-dom';
>>>>>>> 23822b204c9d157ee44c01b3dd0bb3587a6c5555
import Footer from '../Footer';
import HamburgerMenu from '../HamburgerMenu';
import Header from '../Header';
import { useState } from 'react';

const MainLayout = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <HomePayment/>
<<<<<<< HEAD
      <ProductList/>
=======
      <Descubre/>
>>>>>>> 6d85a498aa3b185b9052d93d5c7a885107e24f6f
      <PromotionsBanner />
=======
      <Home />
>>>>>>> 2603e18e10290a099f4a36797664ccb4fdf41f6b
=======
      <Header />
=======
      <Header
        mobileMenuOpened={mobileMenuOpened}
        setMobileMenuOpened={setMobileMenuOpened}
      />
      {mobileMenuOpened && <HamburgerMenu />}
>>>>>>> 84c006e6f3cad30f2d26178e811d44a192be60f2
      <Outlet />
>>>>>>> 23822b204c9d157ee44c01b3dd0bb3587a6c5555
      <Footer />
    </>
  );
};

export default MainLayout;
