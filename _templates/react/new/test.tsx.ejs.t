---
to: <%= absPath %>/__tests__/<%= componentName %>.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import { <%= componentName %> } from '../';

test('renders component successfully', () => {
  render(<<%= componentName %>  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
