import FP from '../fp'
import React from 'react'

export type SelectProps = {
  /**
   * Select ref
   */
  selectRef?: React.RefObject<HTMLSelectElement>
} & React.ComponentProps<typeof FP>

export interface SelectOptionsProps {
  /**
   * Label for the select option
   */
  selectLabel: string

  /**
   * Value for the select option. Can be a number or string.
   */
  selectValue: number | string
}

const Option = ({ selectValue, selectLabel }: SelectOptionsProps) => {
  return <option value={selectValue}>{selectLabel || selectValue}</option>
}

/**
 * Select component props.
 * @param {string} [id] - Unique id for the select.
 * @param {string} [name] - Name for the select input.
 * @param {React.CSSProperties} [styles] - Inline styles.
 * @param {string} [classes] - CSS classes.
 * @param {boolean} [disabled] - Whether select is disabled.
 * @param {React.ReactNode} [children] - Child elements.
 * @param {boolean} [required] - Whether select is required.
 * @param {string | number | string[] | undefined} [selected] - Selected option value(s).
 * @param {React.FocusEventHandler<HTMLSelectElement>} [onBlur] - Blur event handler.
 * @param {React.ChangeEventHandler<HTMLSelectElement>} [onChange] - Change event handler.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} [onSelectionChange] - Selection change handler.
 * @param {(e: React.PointerEvent<HTMLSelectElement>) => void} [onPointerDown] - Pointer down handler.
 * @param {React.Ref<HTMLSelectElement>} [ref] - Ref for the select element.
 */
export const Select = ({
  id,
  name,
  styles,
  classes,
  disabled,
  children,
  required,
  selected,
  onBlur,
  onChange,
  onSelectionChange,
  onPointerDown,
  ref,
  ...props
}: SelectProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onSelectionChange && !disabled) onSelectionChange?.(e)
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLSelectElement>) => {
    if (onPointerDown && !disabled) onPointerDown?.(e)
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (onBlur && !disabled) onBlur?.(e)
  }

  return (
    <FP
      as="select"
      id={id}
      ref={ref}
      name={name}
      selected={selected}
      onChange={handleOnChange}
      onPointerDown={handlePointerDown}
      required={required}
      disabled={disabled}
      aria-required={required} // Accessibility
      aria-disabled={disabled ? true : undefined}
      style={styles}
      {...props}
    >
      {children || <option></option>}
    </FP>
  )
}

export default Select
Select.displayName = 'Select'
Select.Option = Option

export const MemoizedSelect = React.memo(Select)
