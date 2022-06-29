import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';

import App from './App'
describe('App renders correctly', () => {

  test('renders without crashing', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();

  });

  // it renders the button
  test('renders the button', () => {
    render(<App />);
    expect(screen.getByText('count is: 0')).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  })

})
