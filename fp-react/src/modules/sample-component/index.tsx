import React from 'react';

export interface SampleComponentProps {
  children: React.ReactNode;
  styles?: object;
}

const SampleComponent: React.FC<SampleComponentProps> = ({styles, children, ...props}) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return <div style={{...defStyles, ...styles}} {...props}>
 {children ?? SampleComponent}
 </div>;
};

export default SampleComponent;
