---
to: <%= absPath %>/src/component/index.tsx
---
import React from 'react';

export interface <%= component_name %>Props {
  children: React.ReactNode;
};

const <%= component_name %>: React.FC<<%= component_name %>Props> = ({children}) => {
  return <div><%= component_name %>{children}</div>;
};

export default <%= component_name %>;
