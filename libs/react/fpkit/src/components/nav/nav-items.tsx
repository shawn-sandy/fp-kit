import FP from '#components/fp'
import React from 'react'

export type NavItemsProps = {
  /** Children to render. */
  children: React.ReactNode
}

const defaultStyles = {}

/**
 * Renders a list of navigation items.
 *
 * @param {NavItemsProps} props - The props object containing children and other props.
 * @returns {JSX.Element} - The rendered NavItems component.
 */
const NavItems = ({ children, ...props }: NavItemsProps): JSX.Element => {
  return (
    <FP as="section" {...props}>
      {children}
    </FP>
  )
}

export default NavItems
NavItems.displayName = 'NavItems'
NavItems.styles = defaultStyles
