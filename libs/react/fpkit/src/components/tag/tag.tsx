import React from 'react'
import UI from '#components/ui'

export type TagProps = {
  /** HTML element to display the badge as span or p */
  elm?: 'span' | 'p'
  /**  Aria role for the component - conditional */
  role: 'note' | 'status'
} & React.ComponentProps<typeof UI>

export const Tag = ({
  elm = 'span',
  role = 'note',
  children,
  styles,
  ...props
}: TagProps) => {
  return (
    <UI as={elm} role={role} styles={styles} {...props}>
      {children}
    </UI>
  )
}
export default Tag
Tag.displayName = 'Tag'
