import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@test/react';

import App from './App'
describe('App renders correctly', () => {

  test('renders without crashing', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();

  });
})
