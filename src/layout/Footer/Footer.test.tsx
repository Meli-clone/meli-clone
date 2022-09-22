import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('When the page loads, the footer should render', () => {
  render(<Footer />);

  expect(screen).toBeDefined();
});
