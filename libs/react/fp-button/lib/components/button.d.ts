import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    /**
     * Button mouseOver handler
     */
    mouseOver?: () => void;
    /**
     * Button label/content
     */
    children: React.ReactNode;
    /**
     * Button styles and props
     */
    styles?: object;
    /**
     * button classes
     */
    classes?: string;
}
declare const Button: ({ type, children, styles, disabled, classes, onClick, mouseOver, ...props }: ButtonProps) => JSX.Element;
export default Button;
