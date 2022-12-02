import FP from '../fp'
import { SharedInputProps } from '../../types'

export interface SelectProps extends SharedInputProps {
  /**
   * Select onChange event props
   */
  selectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
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
      onChange={handleChange}
      required={required}
      aria-disabled={disabled ? true : undefined}
      style={{ ...defaultStyles }}
    >
      {children || <option value="1">Option 1</option>}
    </FP>
  )
}

Select.displayName = 'Select'
