import { deleteAll } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { deleteAllSummary } from '@/store/summary/summarySlice';

//COMPONENTS AND FUNCTIONS
import { logout } from '@/store/user/user.slice';

const LogOutBtn = () => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(deleteAll());
    dispatch(deleteAllSummary());
  };
  return <button onClick={() => logoutHandler()}>Salir</button>;
};

export default LogOutBtn;
