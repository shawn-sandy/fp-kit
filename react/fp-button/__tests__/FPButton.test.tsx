import React from 'react';
import { render, screen } from '@testing-library/react';
import { FPButton } from '../src';

test('renders component successfully', () => {
  render(<FPButton  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
