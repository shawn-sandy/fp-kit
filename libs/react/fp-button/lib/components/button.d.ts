import * as React from 'react';
interface ButtonProps {
    onClick?: () => void;
    buttonType: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}
declare const Button: ({ buttonType, onClick, children }: ButtonProps) => JSX.Element;
export default Button;
