import * as React from 'react';

type FPProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  role: "note" | "alert" | "status"
  renderStyles?: boolean
  styles?: {}
} & React.ComponentPropsWithoutRef<T>

const FP = <T extends React.ElementType = "div">({as, children, ...props}: FPProps<T>) => {
  const Component = as || "div"
  return <Component {...props}>{children}</Component>
}

export default FP
