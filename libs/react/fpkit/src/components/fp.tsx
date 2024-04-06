import React from 'react'
import { ComponentProps } from '../types'

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>
}

type FPProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    renderStyles?: boolean
    styles?: React.CSSProperties
    classes?: string
  }
>

/*
 * FPComponent type definition
 *
 * Defines the component function signature for the FP component.
 *
 * @typeParam C - The HTML element type to render
 * @param props - The component props
 * @returns React component
 */
type FPComponent = <C extends React.ElementType = 'span'>(
  props: FPProps<C>,
) => React.ReactElement | any

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
const FP: FPComponent = React.forwardRef(
  <C extends React.ElementType>(
    { as, styles, classes, children, defaultStyles, ...props }: FPProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div'

    const styleObj = { ...defaultStyles, ...styles } as React.CSSProperties

    return (
      <Component ref={ref} style={styleObj} className={classes} {...props}>
        {children}
      </Component>
    )
  },
)
export interface BoxProps extends ComponentProps {
  renderStyles: true
}

export default FP
