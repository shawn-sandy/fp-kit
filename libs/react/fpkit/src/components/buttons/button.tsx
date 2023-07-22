// import React from 'react'
import FP from '../fp'
import { ComponentProps } from '../../types'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the button.
   */
  type: 'button' | 'submit' | 'reset'

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

/**
 * Default styles object for the Button component.
 *
 * Defines CSS custom properties used for styling buttons.
 *
 * @property {string} --btn-px - Padding left/right
 * @property {string} --btn-py - Padding top/bottom
 * @property {string} --btn-dsp - Display value
 * @property {string} --btn-place - place-items value
 * @property {string} --btn-justify - justify-content value
 * @property {string} --btn-cursor - Cursor value
 * @property {string} --btn-border - Border value
 * @property {string} --btn-color - Text color
 * @property {string} --btn-bg - Background color
 * @property {string} --btn-radius - Border radius
 */
export const defStyles = {
  paddingInline: 'var(--btn-px, 1.4rem)',
  paddingBlock: 'var(--btn-py, 0.8rem)',
  display: 'var(--btn-dsp, inline-flex)',
  placeItems: 'var(--btn-place, center)',
  justifyContent: 'var(--btn-justify, center)',
  cursor: 'var(--btn-cursor, pointer)',
  border: 'var(--btn-border, none)',
  color: 'var(--btn-color, white)',
  backgroundColor: 'var(--btn-bg, royalblue)',
  borderRadius: 'var(--btn-radius, 0.2rem)',
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
  defaultStyles = false,
  ...props
}: ButtonProps) => {
  const stylesObj = { ...defStyles, ...styles } as React.CSSProperties
  const handlePointerEvents = (e: React.PointerEvent<HTMLButtonElement>) => {
    // let eventType: String = e.type
    if (!disabled) {
      switch (e.type) {
        case 'pointerover':
          pointerOver?.(e)
          break
        case 'pointerleave':
          pointerLeave?.(e)
          break
        case 'pointerdown':
          if (e.button === 0) pointerDown?.(e)
        default:
          break
      }
    }
  }

  /* Returning a button element. */
  return (
    <>
      <FP
        as="button"
        type={type}
        styles={stylesObj}
        // className={classes}
        // onPointerOver={handlePointerEvents}
        // onPointerDown={handlePointerEvents}
        // onPointerLeave={handlePointerEvents}
        // aria-disabled={disabled}
        {...props}
      >
        {children}
      </FP>
    </>
    // <button
    //   type={type ?? 'button'}
    //   onPointerOver={handlePointerEvents}
    //   onPointerDown={handlePointerEvents}
    //   onPointerLeave={handlePointerEvents}
    //   style={stylesObj}
    //   aria-disabled={disabled}
    //   disabled={disabled}
    //   {...props}
    // >
    //   {children}
    // </button>
  )
}

Button.displayName = 'Button'
