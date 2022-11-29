import FP from '../fp'
import { ComponentProps } from '../../types'

export interface FieldProps extends ComponentProps {
  /**
   * Defines the for attribute of the label element
   */
  labelFor: string
  /**
   * The label content
   */
  label: React.ReactNode
}

export const defaultStyles = {}

export const Field = ({
  labelFor,
  styles,
  label,
  children,
  ...props
}: FieldProps) => {
  return (
    <FP as="div" styles={{ ...defaultStyles }} data-style="fields">
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </FP>
  )
}

Field.displayName = 'Field'
