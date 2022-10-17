import './Checkout.scss';
import { useState, ChangeEvent } from 'react';
import CheckoutInitial from './components/Initial';
import CheckoutForm from './components/Form';
import Payment from './components/Payment';
import Summary from './components/Summary';

const Checkout = () => {
  const [page, setPage] = useState<number>(1);
  const [shippingCost, setShippingCost] = useState<number>(936);
  const [CP, setCP] = useState({
    clicked: false,
    CP: '1627',
  });

  const handleAddress = () => {
    setCP({
      clicked: !CP.clicked,
      CP: CP.CP,
    });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCP({
      clicked: CP.clicked,
      CP: e.target.value,
    });
  };

  const handleShipping = (value: number) => {
    setShippingCost(value);
  };

  const handleContinuar = (value: number) => {
    setPage(value);
    window.location.hash = '#minimalHeader';
  };

  if (page === 2) {
    return (
      <CheckoutForm
        handleContinuar={handleContinuar}
        shippingCost={shippingCost}
        CP={CP.CP}
      />
    );
  } else if (page === 3) {
    return (
      <Payment handleContinuar={handleContinuar} shippingCost={shippingCost} />
    );
  } else if (page === 4) {
    return <Summary shippingCost={shippingCost} />;
  }

  return (
    <CheckoutInitial
      handleContinuar={handleContinuar}
      handleShipping={handleShipping}
      shippingCost={shippingCost}
      handleAddress={handleAddress}
      handleInput={handleInput}
      CP={CP}
    />
  );
};

export default Checkout;
