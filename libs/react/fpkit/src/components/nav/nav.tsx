import UI from '../ui'
import { List } from '../list/list'
import React from 'react'

export type NavProps = React.ComponentProps<typeof UI>

export const Nav = ({ children, ...props }: NavProps) => {
  return (
    <UI as="nav" {...props}>
      {children}
    </UI>
  )
}

export default Nav
Nav.displayName = 'Nav'
Nav.List = List
