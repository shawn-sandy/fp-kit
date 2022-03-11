---
to: <%= absPath %>/src/component/index.tsx
---
import * as React from 'react';

interface <%= component_name %>Props = {};

const Component: React.FC<<%= component_name %>Props> = () => {
  return <div><%= component_name %></div>;
};

export default <%= component_name %>;
