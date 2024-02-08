import UI from '../ui'
import List from '../list/list'
import React from 'react'

export type NavListProps = React.ComponentProps<typeof List>
export type NavItemProps = React.ComponentProps<typeof List.ListItem> & {
  inline?: boolean
}
export type NavProps = React.ComponentProps<typeof UI>

/**
 * Renders a NavList component.
 * @param {Object} props - The props for the component.
 * @param {ReactNode} props.children - The child elements.
 * @param {Object} props - Additional props to spread to the List component.
 * @returns {JSX.Element} The rendered NavList component.
 */
export const NavList = ({ children, ...props }: NavListProps) => {
  return (
    <List type="ul" {...props} data-list="unstyled inline">
      {children}
    </List>
  )
}

/**
 * Renders a NavItem component.
 * @param {Object} props - The props for the component.
 * @param {string} [props.id] - The id for the component.
 * @param {Object} [props.styles] - The styles for the component.
 * @param {string} [props.classes] - The classes for the component.
 * @param {ReactNode} props.children - The child elements.
 * @param {boolean} [props.inline=true] - Whether the item should display inline.
 * @param {Object} props - Additional props to spread to the ListItem component.
 * @returns {JSX.Element} The rendered NavItem component.
 */
export const NavItem = ({
  id,
  styles,
  classes,
  children,
  inline = true,
  ...props
}: NavItemProps) => {
  return (
    <List.ListItem
      type="li"
      id={id}
      classes={classes}
      styles={styles}
      data-list={`${inline ? 'inline' : ''} unstyled`}
      {...props}
    >
      {children}
    </List.ListItem>
  )
}

/**
 * Renders a Nav component.
 * @param {Object} props - The props for the component.
 * @param {ReactNode} props.children - The child elements.
 * @param {Object} props - Additional props to spread to the UI component.
 * @returns {JSX.Element} The rendered Nav component.
 */
export const Nav = ({ children, ...props }: NavProps) => {
  return (
    <UI as="nav" {...props}>
      {children}
    </UI>
  )
}

export default Nav
Nav.displayName = 'Nav'
Nav.List = NavList
Nav.Item = NavItem
