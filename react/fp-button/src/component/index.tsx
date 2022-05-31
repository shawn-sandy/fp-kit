import React from 'react';

export interface FPButtonProps {
  children: React.ReactNode
  styles?: object
}

const FPButton: React.FC<FPButtonProps> = ({styles, children, ...props}) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return <div style={{...defStyles, ...styles}} {...props}>
 {children ?? FPButton}
 </div>;
};

export default FPButton;
