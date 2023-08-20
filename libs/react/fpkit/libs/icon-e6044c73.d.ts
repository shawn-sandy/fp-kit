import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ComponentProps {
    /**
     * The default child content/component to render.
     */
    children?: ReactNode;
    /**
     * Use default component styles
     */
    renderStyles?: boolean;
    /**
     * Component id attribute
     */
    id?: string;
    /**
     * Styles object
     */
    styles?: {};
    /**
     * Default styles object
     */
    defaultStyles?: {};
    /**
     * Component class attribute
     */
    classes?: String;
    /**
     * Style value for [data-style] attribute
     */
    dataStyle?: string;
}

interface IconProps$1 extends Partial<ComponentProps> {
    fill?: string;
    size?: number;
    strokeColor?: string;
    strokeWidth?: string;
    role?: string;
    alt?: string;
    width?: number;
    height?: number;
}

declare function Star({ size, fill, strokeColor, styles, role, alt, ...props }: Pick<IconProps$1, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
declare namespace Star {
    var displayName: string;
}

interface IconProps extends Partial<ComponentProps> {
    fill?: string;
    size?: string;
    viewBox?: string;
    name?: string;
}
declare const defaultStyles: {
    display: string;
    direction: string;
    gap: string;
    placeItems: string;
    width: string;
};
/**
 * Icon component wraps svg in a div.
 * @param {IconProps} props - The props object for the Icon component.
 * @param {React.ReactNode} props.children - The children of the Icon component.
 * @param {Object} props.styles - The styles object for the Icon component.
 * @returns {JSX.Element} - The Icon component.
 */
declare const Icon: {
    ({ children, styles, ...props }: IconProps): react_jsx_runtime.JSX.Element;
    Add: {
        ({ fill, size, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): JSX.Element;
        styles: {
            fill: string;
            display: string;
            alignItems: string;
            width: string;
        };
        displayName: string;
    };
    ArrowDown: {
        ({ fill, strokeColor, styles, size, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        styles: {
            display: string;
            alignItems: string;
            width: string;
        };
        displayName: string;
    };
    ArrowLeft: {
        ({ strokeColor, fill, size, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        styles: {
            display: string;
            alignItems: string;
            width: string;
        };
        displayName: string;
    };
    ArrowRight: {
        ({ size, fill, strokeColor, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    ArrowUp: {
        ({ fill, strokeColor, styles, size, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        style: {
            fill: string;
            stroke: string;
            display: string;
            alignItems: string;
            width: string;
        };
    };
    Chat: {
        ({ size, strokeColor, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): JSX.Element;
        styles: {
            display: string;
            alignItems: string;
            width: string;
        };
        displayName: string;
    };
    Code: {
        ({ strokeColor, fill, size, styles, role, alt, ...props }?: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        styles: {
            fill: string;
            stroke: string;
            display: string;
            alignItems: string;
            width: string;
        };
    };
    Copy: {
        ({ size, strokeColor, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): JSX.Element;
        displayName: string;
        styles: {
            stroke: string;
            display: string;
            alignItems: string;
            width: string;
        };
    };
    displayName: string;
    Home: {
        ({ strokeColor, fill, size, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        styles: {
            fill: string;
            stroke: string;
            display: string;
            alignItems: string;
            width: string;
        };
    };
    Left: {
        ({ fill, size, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        styles: {
            fill: string;
            display: string;
            alignItems: string;
            width: string;
        };
    };
    Minus: {
        ({ size, fill, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        styles: {
            fill: string;
        };
    };
    Remove: {
        ({ size, fill, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        styles: {
            fill: string;
        };
    };
    Right: {
        ({ size, fill, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        styles: {
            fill: string;
        };
    };
    Star: typeof Star;
    styles: {
        display: string;
        direction: string;
        gap: string;
        placeItems: string;
        width: string;
    };
    Up: {
        ({ size, fill, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        styles: {
            display: string;
            alignItems: string;
            width: string;
        };
    };
    Down: {
        ({ size, fill, styles, role, alt, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        displayName: string;
        styles: {
            display: string;
            alignItems: string;
            width: string;
        };
    };
    User: {
        ({ size, fill, strokeColor, styles, alt, role, ...props }: Pick<IconProps$1, "role" | "fill" | "alt" | "size" | "styles" | "strokeColor">): react_jsx_runtime.JSX.Element;
        styles: {
            fill: string;
            stroke: string;
            display: string;
            alignItems: string;
            width: string;
        };
        displayName: string;
    };
};

export { ComponentProps as C, Icon as I, IconProps$1 as a, IconProps as b, defaultStyles as d };
