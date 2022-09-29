import * as React from "react"

type KitProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  role: "note" | "alert" | "status"
  renderStyles?: boolean
  styl?: {}
} & React.ComponentPropsWithoutRef<T>

const FP = <T extends React.ElementType = "div">({
  as,
  children,
  styl,
  ...props
}: KitProps<T>) => {
  const Component = as || "div"
  return (
    <Component {...props} style={styl}>
      {children}
    </Component>
  )
}

export default FP
