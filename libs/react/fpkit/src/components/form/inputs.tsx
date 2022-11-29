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
  inputChange,
  inputBlur,
  disabled,
  required,
  inputRef,
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

  return (
    <FP
      as="input"
      id={id}
      type={type}
      placeholder={placeholder}
      styles={{ ...defaultStyles }}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      name={name}
      ref={inputRef}
      aria-disables={disabled}
      {...props}

    />
  )
}

Input.displayName = 'Input'
