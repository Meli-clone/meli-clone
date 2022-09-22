import { render, screen } from '@testing-library/react';
import Descubre from './Descubre';

it('When the page loads, descubre should render', () => {
  render(<Descubre />);

  screen.getByText('Especial Primavera')
});