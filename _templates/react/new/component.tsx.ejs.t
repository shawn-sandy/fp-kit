---
to: <%= absPath %>/src/component/index.tsx
---
import React from 'react';

export interface <%= componentName %>Props {
  children: React.ReactNode;
};

const <%= componentName %>: React.FC<<%= componentName %>Props> = ({children}) => {
  return <div><%= componentName %>{children}</div>;
};

export default <%= componentName %>;
