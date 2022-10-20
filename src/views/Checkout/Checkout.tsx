import './Checkout.scss';
import { useState, useEffect } from 'react';
import CheckoutInitial from './components/Initial';
import CheckoutForm from './components/Form';
import Payment from './components/Payment';
import Summary from './components/Summary';

const Checkout = () => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    document.title = 'Checkout';
  }, []);

  const handleContinuar = (value: number) => {
    setPage(value);
    window.location.hash = '#minimalHeader';
  };

  if (page === 2) {
    return <CheckoutForm handleContinuar={handleContinuar} />;
  } else if (page === 3) {
    return <Payment handleContinuar={handleContinuar} />;
  } else if (page === 4) {
    return <Summary />;
  }

  return <CheckoutInitial handleContinuar={handleContinuar} />;
};

export default Checkout;
