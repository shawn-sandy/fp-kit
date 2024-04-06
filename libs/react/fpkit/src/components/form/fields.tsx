import React from 'react'
import UI from '../ui'

export type FieldProps = {
  /**
   * The label content
   */
  label: React.ReactNode
  children: React.ReactNode
} & React.ComponentProps<'label'> &
  Partial<React.ComponentProps<typeof UI>>
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
    <UI
      as="div"
      id={id}
      styles={styles}
      className={classes}
      data-style="fields"
      {...props}
    >
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </UI>
  )
}

export default Field
Field.displayName = 'Field'
