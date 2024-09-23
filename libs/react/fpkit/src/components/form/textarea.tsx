import React from 'react'
import UI from '../ui'

export type TextareaProps = React.ComponentProps<'textarea'> &
  React.ComponentProps<typeof UI>

/**
 * Textarea component.
 *
 * @param value - The value of the textarea.
 * @param rows - The number of rows.
 * @param cols - The number of columns.
 * @param id - The id of the textarea.
 * @param name - The name of the textarea.
 * @param required - Whether the textarea is required.
 * @param disabled - Whether the textarea is disabled.
 * @param readOnly - Whether the textarea is read only.
 * @param onBlur - Blur event handler.
 * @param onPointerDown - Pointer down event handler.
 * @param onChange - Change event handler.
 * @param ref - Ref for the textarea.
 * @param styles - Styles object for the textarea.
 * @param textareaRef - Ref specifically for the textarea element.
 * @param props - Other props.
 */
export const Textarea = ({
  id,
  classes,
  value,
  rows = 5,
  cols = 25,
  name,
  required,
  disabled,
  readOnly,
  onBlur,
  onPointerDown,
  onChange,
  ref,
  styles,
  placeholder,
  ...props
}: TextareaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange && !disabled) {
      onChange?.(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur && !disabled) {
      onBlur?.(e)
    }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLTextAreaElement>) => {
    if (onPointerDown && !disabled) {
      onPointerDown?.(e)
    }
  }

  return (
    <UI
      as="textarea"
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      styles={styles}
      className={classes}
      data-style="textarea"
      required={required}
      value={value}
      aria-disabled={disabled}
      readOnly={readOnly}
      onChange={handleChange}
      onBlur={handleBlur}
      onPointerDown={handlePointerDown}
      ref={ref}
      placeholder={placeholder || `${required ? '*' : ''} Message`}
      {...props}
    />
  )
}

export default Textarea
Textarea.displayName = 'Textarea'
