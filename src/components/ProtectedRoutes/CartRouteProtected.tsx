import { Navigate, Outlet } from 'react-router-dom';

const CartRouteProtected = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to='/login' />;
  }
};

export default CartRouteProtected;
