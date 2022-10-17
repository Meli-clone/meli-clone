import MinimalHeader from '@/components/MinimalHeader';
import MinimalFooter from '@/components/MinimalFooter';
import { Outlet } from 'react-router-dom';

const MinimalLayout = () => {
  return (
    <>
      <MinimalHeader />
      <Outlet />
      <MinimalFooter />
    </>
  );
};

export default MinimalLayout;
