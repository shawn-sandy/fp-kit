import React from 'react';

export interface InputProps {
  children: React.ReactNode;
  styles?: object;
}

const Input: React.FC<InputProps> = ({styles, children, ...props}) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return <div style={{...defStyles, ...styles}} {...props}>
 {children ?? Input}
 </div>;
};

export default Input;
