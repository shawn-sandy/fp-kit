import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@test/react';
import userEvent from '@test/user-event';

import App from './App'

describe('App renders correctly', () => {

  test('renders without crashing', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();

  });

  it('renders the correct text', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello Vite + React!')).toBeInTheDocument();
  });

  it('renders the button', () => {
    const { getByText } = render(<App />);
    // screen.debug()
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('type', 'button');
    expect(getByText(/count is: 0/i)).toBeInTheDocument();
    expect(button).toMatchSnapshot()
  });

  it('renders the links', () => {
    const { getByText } = render(<App />);
    const link = screen.getAllByRole('link');
    expect(link).toHaveLength(2);
  })


  it('should increment count on click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
  })

});
