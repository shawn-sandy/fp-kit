import FP from '../fp'
import { ComponentProps } from '../../types'

/*
 * CardProps interface
 *
 * Extends ComponentProps. Defines props for the Card component.
 *
 * @property {('div' | 'aside' | 'section' | 'article')} [elm='div'] - HTML element to render as
 */
export interface CardProps extends ComponentProps {
  elm?: 'div' | 'aside' | 'section' | 'article'
}

/*
 * Default styles for the Card component.
 *
 * Defines CSS custom properties for styling cards.
 *
 * @property {string} --card-p - Padding
 * @property {string} --card-bg - Background color
 * @property {string} --card-shadow - Box shadow
 * @property {string} --card-rds - Border radius
 * @property {string} --card-brd - Border
 * @property {string} --card-cl - Text color
 */
export const defaultStyles = {
  padding: 'var(--card-p, 2rem)',
  backgroundColor: 'var(--card-bg, white)',
  boxShadow: 'var(--card-shadow, 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1))',
  borderRadius: 'var(--card-rds, 0.2ßrem)',
  border: 'var(--card-brd, none)',
  color: 'var(--card-cl, black)',
}

/*
 * Card component
 *
 * Renders a card container.
 *
 * @param {CardProps} props - Component props
 * @param {('div' | 'aside' | 'section' | 'article')} [props.elm='div'] - Element to render as
 * @param {Object} [props.styles] - CSS styles to apply
 * @param {ReactNode} props.children - Card content
 * @param {boolean} [props.renderStyles=true] - Whether to render default styles
 * @param {string} [props.dataStyle] - data-card attribute value
 * @param {string} [props.id] - Unique ID
 *
 * @returns {ReactElement} Card component
 */
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
