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
  pointerDown?: (e: React.PointerEvent) => void

  /**
   * Button pointer-down event (pointerOver, pointerLeave)
   */
  pointerOver?: (e: React.PointerEvent) => void

  /**
   * Button pointer-down event (pointerOver, pointerLeave)
   */
  pointerLeave?: (e: React.PointerEvent) => void
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
  borderRadius: "var(--btn-radius, 0.2rem)"
}


export const Button = ({
  type,
  children,
  styles,
  disabled = false,
  classes,
  pointerDown,
  pointerOver,
  pointerLeave,
  defaultStyles = true,
  ...props
}: ButtonProps) => {

  const stylesObj = defaultStyles ? defStyles : {}
  const handlePointerEvents = (
    e: React.PointerEvent<HTMLButtonElement>
  ) => {
    let eventType:String = e.type
    if (!disabled) {
      switch (e.type) {
        case 'pointerover':
          pointerOver?.(e)
          break;
        case 'pointerleave':
          pointerLeave?.(e)
          break;
        case 'pointerdown':
          if (e.button === 0)
          pointerDown?.(e)
        default:
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
