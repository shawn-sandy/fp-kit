import FP from '#components/fp'
import React from 'react'

/**
 * The NavItemsProps type is used in TypeScript React to define the props for a component that renders
 * children.
 * @property children - The `children` property is used to render the content inside the `NavItems`
 * component. It accepts any valid React node as its value, such as text, components, or elements.
 */
export type NavItemsProps = {
  /** Children to render. */
  children: React.ReactNode
}

const defaultStyles = {}

/**
 * NavItems component
 *
 * Renders a `NavItems` component with children.
 *
 * @param {NavItemsProps} props - Component props
 * @param {ReactNode} props.children - Content inside the `NavItems` component
 *
 * @returns {ReactElement} The `NavItems` component
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
