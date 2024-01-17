import FP from '../fp'
import { InputProps } from './inputs'
import { SharedInputProps } from '../../types'

export type TextareaProps = {
  /**
   * Textarea react ref
   */
  textareaRef?: React.RefObject<HTMLTextAreaElement>
  /**
   * Textarea change event handler
   */
  textareaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /**
   * Textarea area blur event handler
   */
  textareaBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  /**
   * Textarea keydown event handler
   */
  textareaDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
} & React.ComponentProps<typeof FP>

export const defaultStyles = {}

export const Textarea = ({
  value,
  rows,
  cols,
  id,
  required,
  disabled,
  readonly,
  textareaBlur,
  textareaChange,
  textareaDown,
  textareaRef,
  ...props
}: TextareaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaChange && !disabled) {
      textareaChange(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (textareaBlur && !disabled) {
      textareaBlur?.(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (textareaDown && !disabled) {
      textareaDown?.(e)
    }
  }

  return (
    <FP
      as="textarea"
      ref={textareaRef}
      rows={rows}
      cols={cols}
      styles={{ ...defaultStyles }}
      data-style="textarea"
      id={id}
      required={required}
      value={value}
      aria-disabled={disabled}
      readOnly={readonly}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
}

export default Textarea
Textarea.displayName = 'Textarea'
