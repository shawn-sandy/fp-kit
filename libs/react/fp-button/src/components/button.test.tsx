import * as React from 'react';

import { describe, expect, test, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './button';
describe('Button renders correctly', () => {

  test('Button renders correctly without crashing', () => {
    render(<Button type='button'>Click Here</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
    expect(screen).toMatchSnapshot();
    screen.debug();
  } );

});
