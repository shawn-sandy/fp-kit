---
to: <%= absPath %>/component/index.tsx
---
import * as React from 'react';

interface <%= component_name %>Props = {};

const Component = () => {
  return <div><%= component_name %></div>;
};

export default <%= component_name %>;
