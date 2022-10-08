import * as React from "react"

export type KitProps<T extends React.ElementType> = {
  as?: T
  renderStyles?: boolean
  styl?: {}
  children: React.ReactNode
  ref: React.RefObject<T>
} & React.ComponentPropsWithoutRef<T>

type PolymorphicComponent = <
  T extends React.ElementType = "div"
>(
  props: KitProps<T>
) => React.ReactElement | null

const FP: PolymorphicComponent = React.forwardRef(
  <T extends React.ElementType>({
    as,
    children,
    styl,
    ref,
    renderStyles = true,
    ...props
  }: KitProps<T>) => {
    const Component = as || "div"
    const stylesObj = renderStyles ? styl : {}
    return (
      <Component ref={ref} {...props} style={stylesObj}>
        {children}
      </Component>
    )
  }
)

export default FP

// const Box: PolymorphicComponent = forwardRef(
//   <T extends ElementType>(props: BoxProps<T>, ref: PolymorphicRef<T>) => {
//     const { as, children, ...rest } = props;
//     const Element = as || 'div';
//     return (
//       <Element ref={ref} {...rest}>
//         {children}
//       </Element>
//     );
//   }
// );

// type PolymorphicComponent = <T extends ElementType = 'div'>(
//   props: BoxProps<T>
// ) => ReactElement | null;
//
// const Box:PolymorphicComponent = <T extends React.ElementType>({ as, children, ...rest }:BoxProps<T>) => {
//   const Element = as || 'div';
//   return <Element {...rest}>{children}</Element>;
// };
