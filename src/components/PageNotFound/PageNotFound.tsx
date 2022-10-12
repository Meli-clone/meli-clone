import './PageNotFound.scss';
import notFound from '@/assets/images/notFound.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='notFound'>
      <img src={notFound} alt='Página no encontrada' />
      <p className='notFound_text'>Parece que esta página no existe</p>
      <Link className='notFound_link' to='/'>
        Volver al inicio
      </Link>
    </div>
  );
};

export default PageNotFound;
