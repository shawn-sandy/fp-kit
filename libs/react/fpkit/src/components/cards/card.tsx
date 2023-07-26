import FP from '../fp'
import { ComponentProps } from '../../types'

export interface CardProps extends ComponentProps {
  elm?: 'div' | 'aside' | 'section' | 'article'
}

export const defaultStyles = {
  padding: 'var(--card-p, 2rem)',
  backgroundColor: 'var(--card-bg, white)',
  boxShadow: 'var(--card-shadow, 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1))',
  borderRadius: 'var(--card-rds, 0.2ßrem)',
  border: 'var(--card-brd, none)',
  color: 'var(--card-cl, black)',
}

export const Card = ({
  elm = 'div',
  styles,
  children,
  renderStyles = true,
  dataStyle,
  id,
  ...props
}: CardProps) => {
  return (
    <FP
      as={elm}
      id={id}
      styles={styles}
      renderStyles={renderStyles}
      data-card={dataStyle}
      {...props}
    >
      {children}
    </FP>
  )
}

Card.styles = defaultStyles

Card.displayName = 'Card'
