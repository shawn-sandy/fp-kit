import * as React from "react"

type BadgeProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  role: "note" | "alert" | "status"
  renderStyles?: boolean
  styles?: {}
} & React.ComponentPropsWithoutRef<T>

const defStyles = {
  paddingInline: "var(--badge-px, 0.7rem)",
  paddingBlock: "var(--badge-py, 0.2rem)",
  color: "var(--badge-cl, black)",
  fontSize: "var(--badge-fs, 0.8rem)",
  fontWeight: "var(--badge-fw, normal)",
  fontFamily: "var(--badge-ff, sans-serif)",
  border: "var(--badge-brd, none)",
  borderRadius: "var(--badge-rds, 99rem)",
  backgroundColor: "var(--badge-bg, lightgray)",
  textDecoration: "var(--badge-decoration, none)",
  textTransform: "var(--badge-tt, var(--tt))"
}


const Badge = <T extends React.ElementType = | "span" | "p" | "a" | "div">({
  children,
  as,
  role,
  styles,
  renderStyles =  true,
  ...props
}: BadgeProps<T>) => {
  const Component = as || "span"
  const stylesObj = renderStyles ? defStyles : {}
  return <Component role={role} style={stylesObj} {...props}>{children}</Component>
}

export default Badge
