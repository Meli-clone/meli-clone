import { render } from '@testing-library/react';
import ProductList from './ProductList';

it('When the page loads, the payments methods should render in home', () => {
  render(<ProductList />);
});