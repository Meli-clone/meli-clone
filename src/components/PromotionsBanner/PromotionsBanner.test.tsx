import { render, screen } from '@testing-library/react';
import PromotionsBanner from './PromotionsBanner';

it('When the page loads, promotions banner should render in home page', () => {
  render(<PromotionsBanner />);

  screen.getByText('Disney+ sin cargo');
  screen.getByText('Suscribete al nivel 6');
});
