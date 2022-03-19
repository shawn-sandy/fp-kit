import React from 'react';
import { text } from 'stream/consumers'

export interface InputProps {
  styles?: object;
  classes?: string;
  type: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "color" | "date" | "datetime-local" | "month" | "time" | "week";
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.VFC<InputProps> = ({styles, type = "text", classes, value, ...props}) => {
  const defStyles = {
    borderStyle: "var(--input-bdr-style, solid)",
    borderWidth: "var(--input-w, thin)",
    borderColor: "var(--input-bdr-color, lightgray)",
    paddingInline: "var(--input-px, 1rem)",
    paddingBlock: "var(--input-py, .5rem)",
  }
  return (
    <input id="input-id" type={type} className={classes} style={{...defStyles, ...styles}} placeholder="Text input element" {...props}/>
 );
}

export default Input;
