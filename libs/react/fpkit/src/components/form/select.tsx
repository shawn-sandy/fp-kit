import FP from '../fp'
import React from 'react'

export type SelectProps = {
  /**
   * Select ref
   */
  selectRef?: React.RefObject<HTMLSelectElement>
} & React.ComponentProps<typeof FP>

export interface SelectOptionsProps {
  selectLabel: string
  selectValue: number | string
}

const Option = ({ selectValue, selectLabel }: SelectOptionsProps) => {
  return <option value={selectValue}>{selectLabel || selectValue}</option>
}

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
