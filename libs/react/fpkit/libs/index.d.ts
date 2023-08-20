import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default from 'react';
import { C as ComponentProps$1 } from './icon-e6044c73.js';
export { I as Icon } from './icon-e6044c73.js';

interface FpBadgeProps {
    elm?: 'span' | 'p';
    children: React__default.ReactNode;
    role: 'note' | 'alert' | 'status';
    renderStyles?: boolean;
    styles?: {};
}
/**
 * @description Creates a Badge component that wraps a child element with a badge.
 * @param {string} elm - element type to render
 * @param {string} role - aria role
 * @param {any} children - child element to render
 * @param {boolean} renderStyles - whether or not to render the default styles
 * @param {object} styles - styles to pass to the FP component
 * @param {object} props - additional props to pass to the FP component
 * @returns {any} - returns the Badge component
 */
declare const Badge: {
    ({ elm, role, children, renderStyles, styles, ...props }: FpBadgeProps): react_jsx_runtime.JSX.Element;
    styles: {
        paddingInline: string;
        paddingBlock: string;
        color: string;
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
        border: string;
        borderRadius: string;
        backgroundColor: string;
        textDecoration: string;
        textTransform: string;
    };
    displayName: string;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The type of the button.
     */
    type: 'button' | 'submit' | 'reset';
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
    /**
     * @deprecated import styles Button.styles
     * default button styles
     */
    defaultStyles?: boolean;
    /**
     * Button pointer-down event (pointerOver, pointerLeave)
     */
    pointerDown?: (e: React.PointerEvent) => void;
    /**
     * Button pointer-down event (pointerOver, pointerLeave)
     */
    pointerOver?: (e: React.PointerEvent) => void;
    /**
     * Pointer leave event handler for the Button component.
     *
     * @param {React.PointerEvent} e - The pointer event
     */
    pointerLeave?: (e: React.PointerEvent) => void;
}
declare const Button: {
    ({ type, children, styles, disabled, classes, pointerDown, pointerOver, pointerLeave, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;
    styles: {
        paddingInline: string;
        paddingBlock: string;
        display: string;
        placeItems: string;
        justifyContent: string;
        cursor: string;
        border: string;
        color: string;
        backgroundColor: string;
        borderRadius: string;
    };
    displayName: string;
};

interface ComponentProps {
    /**
     * The default child content/component to render.
     */
    children?: React.ReactNode;
    /**
     * Use defaylt component styles
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
     * Component class attribute
     */
    classes?: String;
    /**
     * Style value for [data-style] attribute
     */
    dataStyle?: string;
}

interface SharedInputProps extends ComponentProps {
    /**
     * The input name
     */
    name?: string;
    /**
     * The input value
     */
    value?: string;
    /**
     * The input placeholder
     */
    placeholder?: string;
    /**
     * Input is required or not
     */
    required?: boolean;
    /**
     * Input id attribute
     */
    id: string;
    /**
     * Set the element as disabled
     */
    disabled?: boolean;
    /**
     * Set the element as readonly
     */
    readonly?: boolean;
}

interface CardProps extends ComponentProps$1 {
    elm?: 'div' | 'aside' | 'section' | 'article';
}
declare const Card: {
    ({ elm, styles, children, renderStyles, dataStyle, id, ...props }: CardProps): react_jsx_runtime.JSX.Element;
    styles: {
        padding: string;
        backgroundColor: string;
        boxShadow: string;
        borderRadius: string;
        border: string;
        color: string;
    };
    displayName: string;
};

interface DialogProps extends ComponentProps$1 {
    /**
     * React ref for dialog element
     */
    modalRef: React__default.RefObject<HTMLDialogElement>;
    /**
     * Handle close modal event
     */
    closeModal?: (e: React__default.SyntheticEvent<HTMLDialogElement>) => void;
    /**
     * open modal on mount
     */
    openOnMount?: boolean;
}
/**
 * Dialog component
 */
declare const Dialog: {
    ({ id, children, modalRef, openOnMount, ...props }: DialogProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface DropdownProps$1 extends ComponentProps$1 {
    elm?: 'div' | 'aside';
    title: string;
    children: React.ReactNode;
    onToggle?: (e: React.SyntheticEvent) => void;
}

interface SummaryPros {
    children: React.ReactNode;
    styles?: {};
    renderStyles?: boolean;
}

interface DropdownProps extends ComponentProps$1 {
    title: string;
    summary: React.ReactNode;
    toggle?: (e: React.SyntheticEvent) => void;
}
declare const Dropdown: {
    ({ styles, children, summary, toggle, renderStyles, ...props }: DropdownProps): react_jsx_runtime.JSX.Element;
    styles: {
        display: string;
        placeContent: string;
        placeItems: string;
        gap: string;
        border: string;
        transition: string;
        backgroundColor: string;
        padding: string;
        minWidth: string;
        maxWidth: string;
    };
    Summary: {
        ({ children, styles, renderStyles, ...props }: SummaryPros): react_jsx_runtime.JSX.Element;
        styles: {
            listStyle: string;
            justifyContent: string;
            color: string;
            cursor: string;
        };
        displayName: string;
    };
    Details: {
        ({ title, children, styles, renderStyles, onToggle, ...props }: DropdownProps$1): react_jsx_runtime.JSX.Element;
        styles: {
            padding: string;
            backgroundColor: string;
        };
        displayName: string;
    };
    displayName: string;
};

interface FieldProps extends ComponentProps$1 {
    /**
     * Defines the for attribute of the label element
     */
    labelFor: string;
    /**
     * The label content
     */
    label: React.ReactNode;
}
/**
 * Field component that renders a label and children wrapped in a div element.
 * @param labelFor Defines the for attribute of the label element
 * @param styles Custom styles to be applied to the component
 * @param label The label content
 * @param children The children to be rendered inside the component
 * @param props Additional props to be spread to the component
 */
declare const Field: {
    ({ labelFor, styles, label, children, ...props }: FieldProps): react_jsx_runtime.JSX.Element;
    styles: {};
    displayName: string;
};

declare const Header: {
    ({ children, styles, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Main: {
    ({ children, styles, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Footer: {
    ({ children, styles, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Aside: {
    ({ children, styles, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Section: {
    ({ children, styles, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Article: {
    ({ children, styles, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ImageProps extends ComponentProps$1 {
    alt: string;
    src?: string;
    width?: number;
    height?: number;
    loading?: 'eager' | 'lazy';
    placeholder?: string;
    fetchpriority?: 'high' | 'low';
    decoding?: 'sync' | 'async' | 'auto';
    imgError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    imgLoaded?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
declare const Img: {
    ({ src, alt, width, height, styles, loading, placeholder, fetchpriority, decoding, imgLoaded, imgError, ...props }: ImageProps): react_jsx_runtime.JSX.Element;
    styles: {
        maxWidth: string;
        height: string;
        objectFit: string;
        objectPosition: string;
        aspectRatio: string;
        display: string;
    };
    displayName: string;
};

interface InputProps extends Omit<ComponentProps$1, 'children'> {
    /**
     * The type of the input.
     */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
    /**
     * The input name
     */
    name?: string;
    /**
     * The input value
     */
    value?: string;
    /**
     * The input placeholder
     */
    placeholder?: string;
    /**
     * Pass a function to handle input change events
     */
    inputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Pass a function to handle input focus events
     */
    inputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Function prop to handle input keydown events
     */
    inputDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Input is required or not
     */
    required?: boolean;
    /**
     * Input id attribute
     */
    id: string;
    /**
     * Set the element as disabled
     */
    isDisabled?: boolean;
    /**
     * Set the element as readonly
     */
    readonly?: boolean;
    /**
     * ref to the input element
     */
    inputRef?: React.RefObject<HTMLInputElement>;
    /**
     * Input styles
     */
    styles?: {};
    /**
     * input classes
     */
    classes?: string;
}
/**
 * Input component that renders an HTML input element.
 * @param {InputProps} props - The input component props.
 * @returns {JSX.Element} - The input component.
 */
declare const Input: {
    ({ type, name, value, placeholder, id, styles, classes, isDisabled, readonly, required, inputRef, inputChange, inputBlur, inputDown, ...props }: InputProps): JSX.Element;
    styles: {
        minWidth: string;
    };
    displayName: string;
};

type LinkProps = Partial<ComponentProps$1> & {
    href: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
    prefetch?: boolean;
    onPointerDown?: (e: React.PointerEvent<HTMLAnchorElement>) => void;
};
declare const Link: {
    ({ href, target, rel, children, styles, prefetch, onPointerDown, ...props }: LinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ListProps {
    styles?: {};
    classes?: string;
    children: React$1.ReactNode;
    type: 'ul' | 'ol' | 'dl';
    variant: string;
}
declare const List: ({ children, classes, type, variant, styles, ...props }: ListProps) => react_jsx_runtime.JSX.Element;

interface ModalProps extends ComponentProps$1 {
    /**
     * The child component/content for open button
     */
    openChild?: React__default.ReactNode;
    /**
     * The child component/content for close button
     */
    closeChild?: React__default.ReactNode;
    /**
     * The child component/content for modal header
     */
    modalHeader?: React__default.ReactNode;
    /**
     * The child component/content for modal footer
     */
    modalFooter?: React__default.ReactNode;
    /**
     * The child component/content for modal body
     */
    children: React__default.ReactNode;
    /**
     * Open modal on mount when set to true
     */
    showOpen?: boolean;
}
declare const Modal: {
    ({ openChild, closeChild, modalHeader, modalFooter, children, showOpen, ...props }: ModalProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface TableProps extends ComponentProps$1 {
    tblHead: React.ReactNode;
    tblBody: React.ReactNode;
    tblCaption?: React.ReactNode;
}
/**
 * Render the table placing `caption`, `thead` and `tbody` in the correct order
 * caption is optional
 */
declare const RenderTable: {
    ({ tblBody, tblCaption, tblHead }: TableProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Caption: {
    ({ children, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Thead: {
    ({ children, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Tbody: {
    ({ children, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Tr: {
    ({ children, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Td: {
    ({ children, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Table: {
    ({ id, dataStyle, children, ...props }: ComponentProps$1): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type TextElements = 'p' | 'span' | 'a' | 'strong' | 'em' | 'small' | 's' | 'cite' | 'time' | 'code' | 'kbd' | 'sub' | 'sup' | 'i' | 'b' | 'u' | 'mark' | 'span' | 'blockquote';
interface TextProps {
    /**
     * HTML element
     */
    elm?: TextElements;
    children?: React__default.ReactNode;
    text?: String;
    styles?: {};
}
declare const Text: {
    ({ elm, text, styles, children, ...props }: TextProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface TitleProps {
    /**
     * HTML headings
     */
    elm?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: React__default.ReactNode;
    styles?: {};
}
declare const Title: {
    ({ elm, children, styles, ...props }: TitleProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface TextareaProps extends SharedInputProps {
    /**
     * The number of lines in textarea
     */
    rows?: number;
    /**
     * The number of columns in textarea
     */
    cols?: number;
    /**
     * Textarea react ref
     */
    textareaRef?: React.RefObject<HTMLTextAreaElement>;
    /**
     * Textarea change event handler
     */
    textareaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Textarea area blur event handler
     */
    textareaBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Textarea keydown event handler
     */
    textareaDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
declare const Textarea: {
    ({ value, rows, cols, id, required, disabled, readonly, textareaBlur, textareaChange, textareaDown, textareaRef, ...props }: TextareaProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type PolymorphicRef<C extends React__default.ElementType> = React__default.ComponentPropsWithRef<C>['ref'];
type AsProp<C extends React__default.ElementType> = {
    as?: C;
};
type PropsToOmit<C extends React__default.ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<C extends React__default.ElementType, Props = {}> = React__default.PropsWithChildren<Props & AsProp<C>> & Omit<React__default.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
type PolymorphicComponentPropWithRef<C extends React__default.ElementType, Props = {}> = PolymorphicComponentProp<C, Props> & {
    ref?: PolymorphicRef<C>;
};
type FPProps<C extends React__default.ElementType> = PolymorphicComponentPropWithRef<C, {
    renderStyles?: boolean;
    styles?: {};
}>;
type FPComponent = <C extends React__default.ElementType = 'span'>(props: FPProps<C>) => React__default.ReactElement | any;
/**
 * FP component is a polymorphic component that renders an HTML element with optional styles.
 * @param {Object} props - Component props
 * @param {React.ElementType} props.as - The HTML element to render. Defaults to 'div'.
 * @param {boolean} props.renderStyles - Whether to render styles or not. Defaults to true.
 * @param {Object} props.styles - The styles to apply to the component.
 * @param {Object} props.defaultStyles - The default styles to apply to the component.
 * @param {React.ReactNode} props.children - The children to render inside the component.
 * @returns {React.ReactElement} - A React component that renders an HTML element with optional styles.
 */
declare const FP: FPComponent;

export { Article, Aside, Badge, FP as Box, Button, Caption, Card, Dialog, Dropdown, FP, Field, Footer, Header, Img, Input, Link, List, Main, Modal, Section, RenderTable as TBL, Table, FP as Tag, Tbody, Td, Text, Textarea, Thead, Title, Link as To, Tr };
