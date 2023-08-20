import { a as IconProps } from './icon-e6044c73.js';
export { I as Icon, b as IconProps, d as defaultStyles } from './icon-e6044c73.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import 'react';

/**
 * Renders a code icon.
 *
 * @param {string} strokeColor - The color of the icon's stroke.
 * @param {string} fill - The color of the icon's fill.
 * @param {string} size - The size of the icon.
 * @param {string} viewBox - The viewBox of the icon.
 * @param {React.CSSProperties} styles - The default styles of the icon.
 * @param {IconProps} props - Additional props to apply to the icon.
 * @returns {JSX.Element} - A React component that renders an SVG icon.
 */
declare const Code: {
    ({ strokeColor, fill, size, styles, role, alt, ...props }?: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    styles: {
        fill: string;
        stroke: string;
        display: string;
        alignItems: string;
        width: string;
    };
};

/**
 * Renders a home icon.
 *
 * @param {string} strokeColor - The color of the icon's stroke.
 * @param {string} fill - The color of the icon's fill.
 * @param {string} size - The size of the icon.
 * @param {string} viewBox - The viewBox of the icon.
 * @param {string} name - The name of the icon.
 * @param {Object} styles - The styles of the icon.
 * @param {Object} props - The props of the icon.
 * @returns {JSX.Element} - A home icon.
 */
declare const Home: {
    ({ strokeColor, fill, size, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    displayName: string;
    styles: {
        fill: string;
        stroke: string;
        display: string;
        alignItems: string;
        width: string;
    };
};

/**
 * Add Icon component
 * @param {string} fill - Icon fill color (default: 'currentColor')
 * @param {string} size - Icon size (default: '24')
 * @param {IconProps} props - Other icon properties
 * @returns {JSX.Element} - Rendered component
 */
declare const Add: {
    ({ fill, size, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): JSX.Element;
    styles: {
        fill: string;
        display: string;
        alignItems: string;
        width: string;
    };
    displayName: string;
};

/**
 * Renders an arrow pointing to the left.
 *
 * @param {string} strokeColor - The color of the arrow's stroke.
 * @param {string} fill - The fill color of the arrow.
 * @param {string} size - The size of the arrow.
 * @param {object} styles - The styles to apply to the arrow.
 * @param {object} props - The additional props to pass to the SVG element.
 * @returns {JSX.Element} - A React component that renders an arrow pointing to the left.
 */
declare const ArrowLeft: {
    ({ strokeColor, fill, size, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    styles: {
        display: string;
        alignItems: string;
        width: string;
    };
    displayName: string;
};

/**
 * @param {string} size - The width and height of the icon in pixels. Defaults to 24.
 * @param {string} strokeColor - The color of the icon stroke. Defaults to 'currentcolor'.
 * @param {React.CSSProperties} styles - Additional CSS styles to apply to the icon.
 * @param {IconProps} props - Additional props to pass to the SVG element.
 * @returns {JSX.Element} - A chat icon component that displays a speech bubble with lines representing text.
 */
declare const Chat: {
    ({ size, strokeColor, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): JSX.Element;
    styles: {
        display: string;
        alignItems: string;
        width: string;
    };
    displayName: string;
};

/**
 * ArrowDown icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
declare const ArrowDown: {
    ({ fill, strokeColor, styles, size, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    styles: {
        display: string;
        alignItems: string;
        width: string;
    };
    displayName: string;
};

/**
 * ArrowUp icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
declare const ArrowUp: {
    ({ fill, strokeColor, styles, size, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    displayName: string;
    style: {
        fill: string;
        stroke: string;
        display: string;
        alignItems: string;
        width: string;
    };
};

declare const ArrowRight: {
    ({ size, fill, strokeColor, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const User: {
    ({ size, fill, strokeColor, styles, alt, role, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    styles: {
        fill: string;
        stroke: string;
        display: string;
        alignItems: string;
        width: string;
    };
    displayName: string;
};

/**
 * Renders a right arrow icon.
 *
 * @param {string} size - The size of the icon.
 * @param {string} fill - The fill color of the icon.
 * @param {React.CSSProperties} styles - The styles to apply to the icon.
 * @param {IconProps} props - The props to pass down to the icon.
 * @returns {JSX.Element} - A right arrow icon.
 */
declare const Right: {
    ({ size, fill, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    displayName: string;
    styles: {
        fill: string;
    };
};

/**
 * Left arrow icon
 * @param {string} fill - Icon fill color (default: 'currentColor')
 * @param {string} size - Icon size (default: '24')
 * @param {React.CSSProperties} styles - Icon styles (default: {})
 * @param {IconProps} props - Any other valid props for an SVG element
 * @returns {JSX.Element} - Rendered icon component
 */
declare const Left: {
    ({ fill, size, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    displayName: string;
    styles: {
        fill: string;
        display: string;
        alignItems: string;
        width: string;
    };
};

/**
 * Minus icon component
 * @param {string} size - Icon size (default: 24)
 * @param {string} fill - Icon fill color (default: 'currentColor')
 * @param {object} styles - Inline styles for the SVG element
 * @param {object} props - Any other SVG attributes
 * @returns {JSX.Element} - Rendered Minus icon component
 */
declare const Minus: {
    ({ size, fill, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    displayName: string;
    styles: {
        fill: string;
    };
};

/**
 * Remove icon component
 * @param {string} size - The size of the icon
 * @param {string} fill - The fill color of the icon
 * @param {object} styles - The styles to apply to the icon
 * @param {object} props - The additional props to pass to the icon
 * @returns {JSX.Element} - The Remove icon component
 */
declare const Remove: {
    ({ size, fill, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): react_jsx_runtime.JSX.Element;
    displayName: string;
    styles: {
        fill: string;
    };
};

/**
 * Copy icon component
 * @param {string} size - The width and height of the icon
 * @param {string} strokeColor - The color of the icon stroke
 * @param {IconProps} props - The icon component props
 * @returns {JSX.Element} - A react JSX element representing the copy icon
 */
declare const Copy: {
    ({ size, strokeColor, styles, role, alt, ...props }: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'>): JSX.Element;
    displayName: string;
    styles: {
        stroke: string;
        display: string;
        alignItems: string;
        width: string; /**
         * Copy icon component
         * @param {string} size - The width and height of the icon
         * @param {string} strokeColor - The color of the icon stroke
         * @param {IconProps} props - The icon component props
         * @returns {JSX.Element} - A react JSX element representing the copy icon
         */
    };
};

export { Add, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Chat, Code, Copy, Home, Left, Minus, Remove, Right, User };
