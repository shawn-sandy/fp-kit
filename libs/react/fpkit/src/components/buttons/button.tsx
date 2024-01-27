import UI from '../fp'
import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The button type
   * Required - 'button' | 'submit' | 'reset'
   */
  type: 'button' | 'submit' | 'reset'

  /**
   * The button label/content
   * Required
   */
  children: React.ReactNode

  /**
   * Custom CSS styles
   * Optional
   */
  styles?: React.CSSProperties

  /**
   * Custom CSS classes
   * Optional
   */
  classes?: string

  /**
   * Whether to apply default styles
   * Optional - default false
   */
  defaultStyles?: boolean

  /**
   * Pointer down event handler
   * Optional
   */
  pointerDown?: (e: React.PointerEvent) => void

  /**
   * Pointer over event handler
   * Optional
   */
  pointerOver?: (e: React.PointerEvent) => void

  /**
   * Pointer leave event handler
   * Optional
   */
  pointerLeave?: (e: React.PointerEvent) => void
}

/*
 * Button component
 *
 * Renders a <button> element with custom props.
 *
 * @param {ButtonProps} props - The component props
 * @param {"button" | "submit" | "reset"} [props.type="button"] - The button type
 * @param {ReactNode} props.children - The button label/content
 * @param {Object} [props.styles] - Custom CSS styles
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {string} [props.classes] - Custom CSS classes
 * @param {function} [props.pointerDown] - Pointer down event handler
 * @param {function} [props.pointerOver] - Pointer over event handler
 * @param {function} [props.pointerLeave] - Pointer leave event handler
 * @param {boolean} [props.defaultStyles=false] - Whether to apply default styles
 *
 * @returns {JSX.Element} The rendered <button> element
 */
export const Button = ({
  type = 'button',
  children,
  styles,
  disabled,
  classes,
  pointerDown,
  pointerOver,
  pointerLeave,
  ...props
}: ButtonProps) => {
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!disabled) {
      pointerDown?.(e)
    }
  }

  const handlePointerOver = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!disabled) {
      pointerOver?.(e)
    }
  }

  const handlePointerLeave = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!disabled) {
      pointerLeave?.(e)
    }
  }

  /* Returning a button element. */
  return (
    <UI
      as="button"
      type={type}
      onPointerOver={handlePointerOver}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      style={styles}
      className={classes}
      aria-disabled={disabled}
      onClick={handlePointerDown}
      {...props}
    >
      {children}
    </UI>
  )
  //
}

export default Button
Button.displayName = 'Button'
