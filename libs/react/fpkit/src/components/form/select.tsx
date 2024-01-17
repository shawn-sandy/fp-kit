import FP from '../fp'
import { SharedInputProps } from '../../types'
import React from 'react'
import { o } from 'vitest/dist/types-198fd1d9.js'
import { on } from 'events'

export type SelectProps = {
  /**
   * Select onChange event props
   */
  selectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
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
  selectRef,
  onChange,
  onPointerDown,
  ...props
}: SelectProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange && !disabled) onChange?.(e)
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLSelectElement>) => {
    if (onPointerDown && !disabled) onPointerDown?.(e)
  }

  return (
    <FP
      as="select"
      id={id}
      name={name}
      ref={selectRef}
      onChange={handleOnChange}
      onPointerDown={handlePointerDown}
      required={required}
      disabled={disabled}
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
