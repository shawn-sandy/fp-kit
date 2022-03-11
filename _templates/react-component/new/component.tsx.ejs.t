---
to: <%= absPath %>/index.tsx
---
import React from 'react';

export interface <%= component_name %>Props {
  children: React.ReactNode;
};

const <%= component_name %>: React.FC<<%= component_name %>Props> = ({children}) => {
  return <div>{children ?? '<%= component_name %>'}</div>;
};

export default <%= component_name %>;
