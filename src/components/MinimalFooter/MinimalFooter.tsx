import { Link } from 'react-router-dom';
import './MinimalFooter.scss';

const MinimalFooter = () => {
  return (
    <footer>
      <Link to='#'>Cómo cuidamos tu privacidad</Link>
      <p>Copyright © 1999-2022 MercadoLibre Colombia LTDA.</p>
    </footer>
  );
};

export default MinimalFooter;
