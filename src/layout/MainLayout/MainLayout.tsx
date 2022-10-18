import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import HamburgerMenu from '../HamburgerMenu';
import Header from '../Header';
import { useState } from 'react';

const MainLayout = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <>
      <Header
        mobileMenuOpened={mobileMenuOpened}
        setMobileMenuOpened={setMobileMenuOpened}
      />
      {mobileMenuOpened && <HamburgerMenu />}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
