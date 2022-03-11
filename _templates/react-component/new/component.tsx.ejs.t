---
to: <%= absPath %>/index.tsx
---
import React from 'react';

export interface <%= componentName %>Props {
  children: React.ReactNode;
};

const <%= componentName %>: React.FC<<%= componentName %>Props> = ({children}) => {
  return <div>{children ?? '<%= componentName %>'}</div>;
};

export default <%= componentName %>;
