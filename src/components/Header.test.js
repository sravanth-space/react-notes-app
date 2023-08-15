import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders the component', () => {
    const { getByText } = render(<Header />);
    const headerElement = getByText('Notes');
    expect(headerElement).toBeInTheDocument();
  });

  it('calls handleToggleDarkMode when Toggle Mode button is clicked', () => {
    const mockToggleDarkMode = jest.fn();
    const { getByText } = render(<Header handleToggleDarkMode={mockToggleDarkMode} />);
    const toggleButton = getByText('Toggle Mode');

    fireEvent.click(toggleButton);

    expect(mockToggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
