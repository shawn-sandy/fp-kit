import React from 'react';

export interface InputProps {
  children: React.ReactNode;
  styles?: object;
}

const Input: React.VFC<InputProps> = ({styles, children, ...props}) => {
  const defStyles = {
    display: "var(--dsp, flex)"
  }
  return (
    <input id="input-id" type="text" placeholder="Text input element"/>
 );
  }

export default Input;
