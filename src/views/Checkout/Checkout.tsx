import './Checkout.scss';
import { useState } from 'react';
import CheckoutInitial from './components/CheckoutInitial';
import CheckoutAddress from './components/CheckoutAddress';

const Checkout = () => {
  const [page, setPage] = useState<number>(1);

  const handleContinuar = (value: number) => {
    setPage(value);
  };

  if (page === 2) {
    return <CheckoutAddress handleContinuar={handleContinuar} />;
  } else if (page === 3) {
    return <h1>Método de pago</h1>;
  } else if (page === 4) {
    return <h1>Compra finalizada</h1>;
  }

  return (
    <div>
      <CheckoutInitial handleContinuar={handleContinuar} />
    </div>
  );
};

export default Checkout;
