import React from 'react'
import FP from '../fp'

export type InputProps = {
  /**
   * The type of the input.
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'

  /**
   * Set the element as disabled
   */
  isDisabled?: boolean
} & React.ComponentProps<typeof FP>

/**
 * Input component that renders an HTML input element.
 * @param {InputProps} props - The input component props.
 * @returns {JSX.Element} - The input component.
 */
export const Input = ({
  type = 'text',
  name,
  value,
  placeholder,
  id,
  styles,
  classes,
  isDisabled,
  disabled,
  readonly,
  required,
  ref,
  onChange,
  onBlur,
  onPointerDown,
  ...props
}: InputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange?.(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur && !disabled) {
      onBlur?.(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPointerDown && !disabled) {
      e.preventDefault()
      onPointerDown?.(e)
    }
  }

  return (
    <FP
      as="input"
      id={id}
      type={type}
      placeholder={placeholder || `${required ? '*' : ''} ${type} input `}
      className={classes}
      styles={styles}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      value={value}
      name={name}
      ref={ref}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : undefined}
      aria-readonly={readonly}
      aria-required={required}
      required={required}
      readOnly={readonly}
      {...props}
    />
  )
}

Input.displayName = 'Input'
export default Input
