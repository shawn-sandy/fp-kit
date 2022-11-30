import FP from '../fp'
import { InputProps } from './inputs'

export interface TextareaProps
  extends Omit<
    InputProps,
    'type' | 'children' | 'inputBlur' | 'inputChange' | 'inputDown'
  > {
  /**
   * The textarea value
   */
  value?: string
  /**
   * The number of lines in textarea
   */
  rows?: number
  /**
   * The number of columns in textarea
   */
  cols?: number
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
}

export const defaultStyles = {}

export const Textarea = ({
  value,
  rows,
  cols,
  id,
  required,
  textareaBlur,
  textareaChange,
  textareaDown,
  textareaRef,
  ...props
}: TextareaProps) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaChange) {
      textareaChange(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (textareaBlur) {
      textareaBlur?.(e)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (textareaDown) {
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
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
}

Textarea.displayName = 'Textarea'
