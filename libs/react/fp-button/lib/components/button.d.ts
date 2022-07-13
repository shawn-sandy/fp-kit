import * as React from "react";
export interface ButtonProps {
    /**
     * Button type (button, submit, reset)
     */
    buttonType: "button" | "submit" | "reset";
    /**
     * Button onClick handler
     */
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
     * Set button as disabled
     */
    disabled?: boolean;
    /**
     * button classes
     */
    classes?: string;
}
declare const Button: ({ buttonType, onClick, children, styles, disabled, classes, mouseOver, ...props }: ButtonProps) => JSX.Element;
export default Button;
