import FP from '../fp'
import { SharedInputProps } from '../../types'

import './style.scss'

export interface SelectProps extends SharedInputProps {
  /**
   * Select onChange event props
   */
  selectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  /**
   * Select ref
   */
  selectRef?: React.RefObject<HTMLSelectElement>
}

export interface SelectOptionsProps {
  selectLabel: 'String'
  selectValue: 'Number' | 'String'
}

export const defaultStyles = {}

const options = ({ selectValue, selectLabel }: SelectOptionsProps) => {
  return <option value={selectValue}>{selectLabel || selectValue}</option>
}

export const Select = ({
  disabled,
  children,
  required,
  selectRef,
  selectChange,
  ...props
}: SelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectChange && !disabled) {
      selectChange?.(e)
    }
  }

  return (
    <FP
      as="select"
      ref={selectRef}
      onChange={handleChange}
      onBlur={handleChange}
      required={required}
      aria-disabled={disabled ? true : undefined}
      style={{ ...defaultStyles }}
    >
      {children || <option value="1">Option 1</option>}
    </FP>
  )
}

Select.styles = defaultStyles

Select.displayName = 'Select'
