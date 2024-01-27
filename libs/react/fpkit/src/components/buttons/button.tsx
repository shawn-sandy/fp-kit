import UI from '../ui'
import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<React.ComponentProps<typeof UI>> & {
    /**
     * The button type
     * Required - 'button' | 'submit' | 'reset'
     */
    type: 'button' | 'submit' | 'reset'
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
