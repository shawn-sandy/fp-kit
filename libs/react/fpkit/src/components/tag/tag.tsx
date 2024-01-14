import React from 'react'
import FP from '#components/fp'

export type TagProps = {
  /** HTML element to display the badge as span or p */
  elm?: 'span' | 'p'
  /**  Aria role for the component - conditional */
  role: 'note' | 'status'
} & React.ComponentProps<typeof FP>

/**
 * @description Creates a Badge component that wraps a child element with a badge.
 * @param {string} elm - element type to render
 * @param {string} role - aria role
 * @param {any} children - child element to render
 * @param {boolean} renderStyles - whether or not to render the default styles
 * @param {object} styles - styles to pass to the FP component
 * @param {object} props - additional props to pass to the FP component
 * @returns {any} - returns the Badge component
 */
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
