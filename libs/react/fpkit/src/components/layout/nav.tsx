import FP from '../fp'
import { ComponentProps } from '../../types'

export const Nav = ({ children, styles = {}, ...props }: ComponentProps) => {
  return (
    <FP as="nav" styles={styles} {...props}>
      {children}
    </FP>
  )
}

export default Nav
Nav.displayName = 'Nav'
