import * as React from "react"

type KitProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  renderStyles?: boolean
  styl?: {}
} & React.ComponentPropsWithoutRef<T>

const FP = <T extends React.ElementType = "div">({
  as,
  children,
  styl,
  renderStyles,
  ...props
}: KitProps<T>) => {
  const Component = as || "div"
  const stylesObj = renderStyles ? styl : {}
  return (
    <Component {...props} style={stylesObj}>
      {children}
    </Component>
  )
}

export default FP
