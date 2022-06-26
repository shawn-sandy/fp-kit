import React from 'react';

export interface FPButtonProps {
  children: React.ReactNode
  styles?: object
}

const FPButton = ({styles, children, ...props}: FPButtonProps) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return <div style={{...defStyles, ...styles}} {...props}>
 {children ?? 'FPButton'}
 </div>;
};

export default FPButton;
