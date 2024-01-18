import FP from '../fp'
// import { SharedInputProps } from '../../types'
import React from 'react'

export type SelectProps = {
  /**
   * Select ref
   */
  selectRef?: React.RefObject<HTMLSelectElement>
} & React.ComponentProps<typeof FP>

export interface SelectOptionsProps {
  selectLabel: 'String'
  selectValue: 'Number' | 'String'
}

export const defaultStyles = {}

const options = ({ selectValue, selectLabel }: SelectOptionsProps) => {
  return <option value={selectValue}>{selectLabel || selectValue}</option>
}

export const Select = ({
  id,
  name,
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
      style={{ ...defaultStyles }}
      {...props}
    >
      {children || <option value="1">Option 1</option>}
    </FP>
  )
}

export default Select
Select.styles = defaultStyles
Select.displayName = 'Select'
