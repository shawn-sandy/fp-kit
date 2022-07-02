import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should increment count on click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
  })

})
