import { useAppDispatch } from '@/store/hooks';

//COMPONENTS AND FUNCTIONS
import { logout } from '@/store/user/user.slice';

const LogOutBtn = () => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(logout());
  };
  return <button onClick={() => logoutHandler()}>Salir</button>;
};

export default LogOutBtn;
