import { render, screen } from '@testing-library/react';
import HomePayment from './HomePayment';

it('When the page loads, the payments methods should render in home', () => {
  render(<HomePayment />);

  screen.getByAltText('Ícono tarjeta de débito');
  screen.getByAltText('Ícono mercado crédito.');
});