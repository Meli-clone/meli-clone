import { Navigate, Outlet } from 'react-router-dom';

const LoggedInValidation = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') ?? 'null');

  if (userInfo) {
    return <Navigate to='/' />;
  } else {
    return <Outlet />;
  }
};

export default LoggedInValidation;
