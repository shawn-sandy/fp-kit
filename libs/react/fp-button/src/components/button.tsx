import React from "react"

/* Defining the props that the Button component will take. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the button.
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
}

const Button = ({
  type,
  children,
  styles,
  disabled,
  classes,
  onPointerDown,
  onPointerOver,
  onClick,
  defaultStyles = true,
  ...props
}: ButtonProps) => {
  const defStyles = {
    paddingInline: "var(--btn-px, 1.4rem)",
    paddingBlock: "var(--btn-py, 0.8rem)",
    display: "var(--btn-dsp, inline-flex)",
    placeItems: "var(--btn-place, center)",
    justifyContent: "var(--btn-justify, center)",
    cursor: "var(--btn-cursor, pointer)",
    border: "var(--btn-border, none)",
    color: "var(--btn-color, white)",
    backgroundColor: "var(--btn-bg, royalblue)",
    borderRadius: "var(--btn-radius, 0.1rem)",
  }

  const stylesObj = defaultStyles ? defStyles : {};



 /**
  * If the button is not disabled, then call the onClick function
  */
  const handleClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    if(!disabled) {
      onClick?.(e)
    }
  }

 /**
  *  If the button is not disabled, then call the onPointerOver function
  */
 const handlePointerdown = (e: React.PointerEvent<HTMLButtonElement>) => {
  if(!disabled) {
    onPointerOver?.(e)
  }
}

/**
 * A function that returns a function.
 */
  const handleHover = (e: React.PointerEvent<HTMLButtonElement>) => {
    if(!disabled) {
    onPointerOver?.(e)
    }
  }

/* Returning a button element. */
  return (
    <button
      type={type}
      onPointerOver={handleHover}
      onPointerDown={handlePointerdown}
      onClick={handleClick}
      style={{...stylesObj, ...styles }}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
