import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The type of the button.
     */
    type: "button" | "submit" | "reset";
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
declare const Button: ({ type, children, styles, disabled, classes, onClick, onMouseOver, ...props }: ButtonProps) => JSX.Element;
export default Button;
