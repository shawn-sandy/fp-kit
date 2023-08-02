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

/**
 * Field component that renders a label and children wrapped in a div element.
 * @param labelFor Defines the for attribute of the label element
 * @param styles Custom styles to be applied to the component
 * @param label The label content
 * @param children The children to be rendered inside the component
 * @param props Additional props to be spread to the component
 */
export const Field = ({
  labelFor,
  styles,
  label,
  children,
  ...props
}: FieldProps) => {
  return (
    <FP as="div" styles={styles} data-style="fields">
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </FP>
  )
}

Field.styles = defaultStyles

Field.displayName = 'Field'
