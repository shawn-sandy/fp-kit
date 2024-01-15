import FP from '../fp'
import { ComponentProps } from '../../types'

// import

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
   * Set the element as disabled
   */
  isDisabled?: boolean
  /**
   * Set the element as readonly
   */
  readonly?: boolean
  /**
   * ref to the input element
   */
  inputRef?: React.RefObject<HTMLInputElement>
}

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
  readonly,
  required,
  inputRef,
  inputChange,
  inputBlur,
  inputDown,
  ...props
}: InputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputChange && !isDisabled) {
      inputChange?.(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputBlur && !isDisabled) {
      inputBlur?.(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputDown && !isDisabled) {
      e.preventDefault()
      inputDown?.(e)
    }
  }

  return (
    <FP
      as="input"
      id={id}
      type={type}
      placeholder={placeholder || `${type} input`}
      className={classes}
      styles={styles}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      value={value}
      name={name}
      ref={inputRef}
      aria-disabled={isDisabled}
      tab-index={isDisabled ? -1 : undefined}
      aria-readonly={readonly}
      readOnly={readonly}
      {...props}
    />
  )
}

export default Input
Input.displayName = 'Input'
