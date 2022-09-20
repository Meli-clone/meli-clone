import { fireEvent, render, screen } from '@testing-library/react';
import DropdownAccess from './DropdownAccess';

beforeEach(() => {
  render(<DropdownAccess />);
});

describe('When the page loads', () => {
  it('the label tag should render', () => {
    screen.getByText('Más información');
  });

  it('the list of links should not be seen', () => {
    const navDropdownAccess = screen.getByTestId('nav_dropdown_access');

    expect(navDropdownAccess).not.toHaveClass('open');
  });
});

describe('When clic on "Más información"', () => {
  it('the list of links should be seen', () => {
    const navDropdownAccess = screen.getByTestId('nav_dropdown_access');
    const dropdownSwitch = screen.getByRole('button');

    fireEvent.click(dropdownSwitch);

    expect(navDropdownAccess).toHaveClass('open');
  });
});
