---
to: <%= absPath %>/src/component/index.tsx
---

import React from 'react';

export interface <%= componentName %>Props {
  children: React.ReactNode;
  styles?: object;
}

const <%= componentName %>: React.FC<<%= componentName %>Props> = ({styles, children, ...props}) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return <div style={{...defStyles, ...styles}} {...props}>
 {children ?? <%= componentName %>}
 </div>;
};

export default <%= componentName %>;
