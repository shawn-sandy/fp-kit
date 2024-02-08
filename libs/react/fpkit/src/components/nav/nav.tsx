import UI from '../ui'
import List from '../list/list'
import React from 'react'

export type NavListProps = React.ComponentProps<typeof List>
export type NavItemProps = React.ComponentProps<typeof List.ListItem> & {
  inline?: boolean
}
export type NavProps = React.ComponentProps<typeof UI>

export const NavList = ({ children, ...props }: NavListProps) => {
  return (
    <List type="ul" {...props} data-list="unstyled inline">
      {children}
    </List>
  )
}

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
