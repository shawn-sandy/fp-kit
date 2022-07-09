import * as React from "react"

export interface ButtonProps {
  buttonType: "button" | "submit" | "reset"
  onClick?: () => void
  children: React.ReactNode
  styles?: object
  disabled?: boolean
  classes?: string
}

const Button = ({
  buttonType,
  onClick,
  children,
  styles,
  disabled,
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

  const handleClick = () => {
    if(!disabled) {
      onClick && onClick()
    }
  }


  return (
    <button
      type={buttonType}
      onClick={handleClick}
      style={{ ...defStyles, ...styles }}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
