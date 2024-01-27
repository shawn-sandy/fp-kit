import React from 'react'
import FP from '#components/fp'

export type TagProps = {
  /** HTML element to display the badge as span or p */
  elm?: 'span' | 'p'
  /**  Aria role for the component - conditional */
  role: 'note' | 'status'
} & React.ComponentProps<typeof FP>

export const Tag = ({
  elm = 'span',
  role = 'note',
  children,
  styles,
  ...props
}: TagProps) => {
  return (
    <FP as={elm} role={role} styles={styles} {...props}>
      {children}
    </FP>
  )
}
export default Tag
Tag.displayName = 'Tag'
