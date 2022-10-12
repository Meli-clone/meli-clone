import './Checkout.scss';
import { useState } from 'react';
import CheckoutInitial from './components/CheckoutInitial';
import CheckoutForm from './components/CheckoutForm';
import MinimalHeader from '@/views/components/MinimalHeader';

const Checkout = () => {
  const [page, setPage] = useState<number>(1);

  const handleContinuar = (value: number) => {
    setPage(value);
  };

  if (page === 2) {
    return <CheckoutForm handleContinuar={handleContinuar} />;
  } else if (page === 3) {
    return <h1>Método de pago</h1>;
  } else if (page === 4) {
    return <h1>Compra finalizada</h1>;
  }

  return (
    <div>
      <MinimalHeader />
      <CheckoutInitial handleContinuar={handleContinuar} />
    </div>
  );
};

export default Checkout;
