import FP from '../fp'
import { ComponentProps } from '../../types'

export interface InputProps extends Omit<ComponentProps, 'children'> {
  /**
   * The type of the input.
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
  /**
   * The input name
   */
  name?: string
  /**
   * The input value
   */
  value?: string
  /**
   * The input placeholder
   */
  placeholder?: string
  /**
   * Pass a function to handle input change events
   */
  inputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Pass a function to handle input focus events
   */
  inputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  /**
   * Function prop to handle input keydown events
   */
  inputDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /**
   * Input is required or not
   */
  required?: boolean
  /**
   * Input id attribute
   */
  id: string
  /**
   * Set the element as disabled
   */
  disabled?: boolean
  /**
   * Set the element as readonly
   */
  readonly?: boolean
  /**
   * ref to the input element
   */
  inputRef?: React.RefObject<HTMLInputElement>

}

export const defaultStyles = {}

export const Input = ({
  type = 'text',
  name,
  value,
  placeholder,
  id,
  disabled,
  readonly,
  required,
  inputRef,
  inputChange,
  inputBlur,
  inputDown,
  ...props
}: InputProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputChange && !disabled) {
      inputChange?.(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if(inputBlur && !disabled) {
      inputBlur?.(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(inputDown && !disabled) {
      e.preventDefault()
      inputDown?.(e)
    }
  }

  return (
    <FP
      as="input"
      id={id}
      type={type}
      placeholder={placeholder}
      styles={{ ...defaultStyles }}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      value={value}
      name={name}
      ref={inputRef}
      aria-disabled={disabled}
      tab-index={disabled ? -1 : undefined}
      aria-readonly={readonly}
      readOnly={readonly}
      {...props}
    />
  )
}

Input.displayName = 'Input'
