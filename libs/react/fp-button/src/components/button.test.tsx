import * as React from 'react';

import { describe, expect, test, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './button';
describe('Button renders correctly', () => {

  test('Button renders without crashing', () => {
    render(<Button>Click</Button>);
    expect(screen).toMatchSnapshot();
    screen.debug();
  } );

});
