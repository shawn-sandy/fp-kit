import FP from '../fp'
import { ComponentProps } from '../../types'

export type FieldProps = {
  /**
   * Defines the for attribute of the label element
   */
  labelFor: string
  /**
   * The label content
   */
  label: React.ReactNode
} & React.ComponentProps<typeof FP>
/**
 * Field component that renders a label and children wrapped in a div element.
 * @param labelFor Defines the for attribute of the label element
 * @param styles Custom styles to be applied to the component
 * @param label The label content
 * @param children The children to be rendered inside the component
 * @param props Additional props to be spread to the component
 */
export const Field = ({
  label,
  labelFor,
  id,
  styles,
  classes,
  children,
  ...props
}: FieldProps) => {
  return (
    <FP
      as="div"
      id={id}
      styles={styles}
      className={classes}
      data-style="fields"
    >
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </FP>
  )
}

export default Field
Field.displayName = 'Field'
