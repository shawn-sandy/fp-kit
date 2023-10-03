import FP from '#components/fp'
import React from 'react'

export interface FpBadgeProps {
  elm?: 'span' | 'p'
  children: React.ReactNode
  role: 'note' | 'alert' | 'status'
  renderStyles?: boolean
  styles?: {}
}

const defStyles = {
  paddingInline: 'var(--badge-px, 0.7rem)',
  paddingBlock: 'var(--badge-py, 0.2rem)',
  color: 'var(--badge-cl, black)',
  fontSize: 'var(--badge-fs, 0.8rem)',
  fontWeight: 'var(--badge-fw, normal)',
  fontFamily: 'var(--badge-ff, sans-serif)',
  border: 'var(--badge-brd, none)',
  borderRadius: 'var(--badge-rds, 99rem)',
  backgroundColor: 'var(--badge-bg, lightgray)',
  textDecoration: 'var(--badge-decoration, none)',
  textTransform: 'var(--badge-tt, var(--tt))',
}

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
export const Badge = ({
  elm = 'span',
  role,
  children,
  renderStyles = true,
  styles = {},
  ...props
}: FpBadgeProps) => {
  return (
    <FP as={elm} role={role} styles={styles} {...props}>
      {children}
    </FP>
  )
}
export default Badge
Badge.styles = defStyles
Badge.displayName = 'Badge'
