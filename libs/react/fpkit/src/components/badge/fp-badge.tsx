import FP from "../fp"

export interface FpBadgeProps {
  elm?: "span" | "p" | "a"
  children: React.ReactNode
  role: "note" | "alert" | "status"
  renderStyles?: boolean
  styles?: {}
}

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

export const Badge = ({
  elm = "span",
  role,
  children,
  renderStyles = true,
  styles = {},
  ...props
}: FpBadgeProps) => {
  const stylesObj = renderStyles ? defStyles : {}
  return (
    <FP
      as={elm}
      role={role}
      styles={{ ...stylesObj, ...styles }}
      {...props}
    >
      {children}
    </FP>
  )
}

Badge.displayName = "Badge"
