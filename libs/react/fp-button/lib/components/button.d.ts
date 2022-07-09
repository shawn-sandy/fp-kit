import * as React from "react";
export interface ButtonProps {
    buttonType: "button" | "submit" | "reset";
    onClick?: () => void;
    children: React.ReactNode;
    styles?: object;
    classes?: string;
}
declare const Button: ({ buttonType, onClick, children, styles, classes, ...props }: ButtonProps) => JSX.Element;
export default Button;
