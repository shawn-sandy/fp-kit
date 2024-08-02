---
to: <%= absPath %>/__tests__/<%= componentName %>.test.tsx
---
import React from 'react';
import { render, screen } from '@test/react';
import { <%= componentName %> } from '../src/';

test('renders component successfully', () => {
  render(<<%= componentName %>  />);
  const element = screen.getByTestId(/<%= componentName %>/i);
  expect(element).toBeInTheDocument();
});
