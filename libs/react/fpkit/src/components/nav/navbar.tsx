import Nav from './nav'
import React from 'react'

export type NavbarProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Nav>

const defaultStyles = {}

const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <Nav {...props}>
      <Nav.List styles={defaultStyles} data-list="unstyled inline">
        {children}
      </Nav.List>
    </Nav>
  )
}

export default Navbar
Navbar.displayName = 'Navbar'

Navbar.styles = defaultStyles
