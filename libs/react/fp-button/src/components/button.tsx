import * as React from "react"

export interface ButtonProps {
  buttonType: "button" | "submit" | "reset"
  onClick?: () => void
  mouseOver?: () => void
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
  mouseOver,
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

  const handleMouseOver = () => {
    mouseOver && mouseOver()
  }

  return (
    <button
      type={buttonType}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      style={{ ...defStyles, ...styles }}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
