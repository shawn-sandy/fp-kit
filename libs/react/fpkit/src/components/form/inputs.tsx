import FP from '../fp'

// import

export type InputProps = {
  /**
   * The type of the input.
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
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
  readonly,
  required,
  ref,
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
      tab-index={isDisabled ? -1 : undefined}
      aria-readonly={readonly}
      aria-required={required}
      required={required}
      readOnly={readonly}
      {...props}
    />
  )
}

export default Input
Input.displayName = 'Input'
