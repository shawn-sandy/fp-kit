import React from 'react';

export interface TextareaProps {
  children: React.ReactNode;
  styles?: object;
}

const Textarea: React.FC<TextareaProps> = ({styles, children, ...props}) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return (<div style={{...defStyles, ...styles}} {...props}>
 {children ?? Textarea}
 </div>);
};

export default Textarea;
