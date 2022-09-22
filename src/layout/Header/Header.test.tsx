import { render, screen } from '@testing-library/react';
import Header from './Header';

it('When the page loads, promotions banner should render in home page', () => {
  render(<Header />);

  screen.getByAltText('logo de mercado libre');
});
