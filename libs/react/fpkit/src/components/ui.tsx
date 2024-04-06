/* eslint-enable react/display-name */
import React from 'react'

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
    id?: string
    children?: React.ReactNode
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

const FP: FPComponent = React.forwardRef(
  <C extends React.ElementType>(
    { as, styles, classes, children, defaultStyles, ...props }: FPProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div'

    const styleObj: React.CSSProperties = { ...defaultStyles, ...styles }

    return (
      <Component ref={ref} style={styleObj} className={classes} {...props}>
        {children}
      </Component>
    )
  },
)

export default FP
