import * as React from "react"

export interface NavbarProps {
  /**
   * The children of the navbar use navbar-item to create the links
   */
  children: React.ReactNode
  /**
   * The classes of the navbar
   */
  classes?: string
  /**
   * The styles of the navbar
   */
  styles?: any
}

const Navbar: React.FC<NavbarProps> = ({
  classes,
  styles,
  children,
  ...props
}) => {
  const defStyles = {
    backgroundColor: "var(--navbar-bg, #f8f9fa)",
    flexDirection: "var(--nav-direction, row)",
    width: "var(--nav-w, 100%)",
    height: "var(--nav-h, calc(50rem / 16))",
    placeItems: "var(--nav-place-items, center)",
    justifyContent: "var(--nav-justify, space-between)"
  }

  return (
    <nav
      className={classes}
      style={{ ...defStyles, ...styles }}
    >
      {children}
    </nav>
  )
}

export default Navbar
