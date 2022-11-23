import React from "react"


interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the button.
   * @default none
   */
  type: "button" | "submit" | "reset"

  /**
   * Button label/content
   */
  children: React.ReactNode

  /**
   * Button styles and props
   */
  styles?: object

  /**
   * button classes
   */
  classes?: string

  /**
   * default button styles
   */
  defaultStyles?: boolean

  /**
   * Button pointer-down event (pointerOver, pointerLeave)
   */
  onPointerDown?: (e: React.PointerEvent) => void
}

export const defStyles = {
  paddingInline: "var(--btn-px, 1.4rem)",
  paddingBlock: "var(--btn-py, 0.8rem)",
  display: "var(--btn-dsp, inline-flex)",
  placeItems: "var(--btn-place, center)",
  justifyContent: "var(--btn-justify, center)",
  cursor: "var(--btn-cursor, pointer)",
  border: "var(--btn-border, none)",
  color: "var(--btn-color, white)",
  backgroundColor: "var(--btn-bg, royalblue)",
  borderRadius: "var(--btn-radius, 0.1rem)"
}


export const Button = ({
  type,
  children,
  styles,
  disabled = true,
  classes,
  onPointerDown,
  onPointerOver,
  onPointerLeave,
  defaultStyles = false,
  ...props
}: ButtonProps) => {

  const stylesObj = defaultStyles ? defStyles : {}
  const handlePointerEvents = (
    e: React.PointerEvent<HTMLButtonElement>
  ) => {
    if (!disabled) {
      switch (e.type) {
        case 'pointerover':
          onPointerOver?.(e)
          break;
        case 'pointerleave':
          onPointerLeave?.(e)
          break;
        default:
          onPointerDown?.(e)
          break;
      }
    }
  }

  /* Returning a button element. */
  return (
    <button
      type={type}
      onPointerOver={handlePointerEvents}
      onPointerDown={handlePointerEvents}
      onPointerLeave={handlePointerEvents}
      style={{ ...stylesObj, ...styles }}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
  //
}

Button.displayName = 'Button'
