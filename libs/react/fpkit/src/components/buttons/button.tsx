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
}

export const Button = ({
  type = 'button',
  children,
  styles,
  disabled,
  classes,
  onPointerDown,
  onPointerOver,
  onPointerLeave,

  ...props
}: ButtonProps) => {
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onPointerDown?.(e)
    }
  }

  const handlePointerOver = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onPointerOver?.(e)
    }
  }

  const handlePointerLeave = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onPointerLeave?.(e)
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
