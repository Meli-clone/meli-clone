import { deleteAll } from '@/store/cart/cartSlice';
import { useAppDispatch } from '@/store/hooks';
import { deleteAllSummary } from '@/store/summary/summarySlice';
import { useNavigate } from 'react-router-dom';
import './LogOutBtn.scss';

//COMPONENTS AND FUNCTIONS
import { logout } from '@/store/user/user.slice';

const LogOutBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(deleteAll());
    dispatch(deleteAllSummary());
    dispatch(logout());
    navigate('/');
  };
  return (
    <button className='logoutButton' onClick={() => logoutHandler()}>
      Salir
    </button>
  );
};

export default LogOutBtn;
