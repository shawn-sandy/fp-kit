import { type } from "os"
import * as React from "react"

interface ButtonProps {
  buttonType: "button" | "submit" | "reset"
  onClick?: () => void
  children: React.ReactNode
  styles?: object
  classes?: string
}

const Button = ({
  buttonType,
  onClick,
  children,
  styles,
  classes,
  ...props
}: ButtonProps) => {
  const defStyles: object = {
    paddingInline: "var(--btn-px, 1.4rem)",
    paddingBlock: "var(--btn-py, 0.8rem)",
    display: "var(--btn-dsp, inline-flex)",
    placeItems: "var(--btn-place, center)",
    justifyContent: "var(--btn-justify, center)",
    cursor: "var(--btn-cursor, pointer)"
  }
  return (
    <button
      type={buttonType}
      onClick={onClick}
      style={{ ...defStyles, ...styles }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
