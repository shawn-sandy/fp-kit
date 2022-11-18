import React from "react"
import { ComponentProps } from "../types"

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"]

type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<
  C extends React.ElementType,
  P
> = keyof (AsProp<C> & P)

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<
    React.ComponentPropsWithoutRef<C>,
    PropsToOmit<C, Props>
  >

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>
}

type FPProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      renderStyles?: boolean
      styles?: {}
    }
  >

type FPComponent = <C extends React.ElementType = "span">(
  props: FPProps<C>
) => React.ReactElement | null

const FP: FPComponent = React.forwardRef(
  <C extends React.ElementType>(
    {
      as,
      renderStyles = true,
      styles,
      children
    }: FPProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div"

    const styleObj = renderStyles ? styles : {}

    return (
      <Component ref={ref} style={styleObj}>
        {children}
      </Component>
    )
  }
)
interface BoxProps extends ComponentProps {
  elm?: "div",
  renderStyles: true,
}

export default FP
