import React from 'react'
import UI from '#components/ui'

/*
 * CardProps interface
 *
 * Extends ComponentProps. Defines props for the Card component.
 *
 * @property {('div' | 'aside' | 'section' | 'article')} [elm='div'] - HTML element to render as
 */
export type CardProps = {
  elm?: 'div' | 'aside' | 'section' | 'article'
} & React.ComponentProps<typeof UI>

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
  classes,
  id,
  ...props
}: CardProps) => {
  return (
    <UI
      as={elm}
      id={id}
      styles={styles}
      className={classes}
      data-card
      {...props}
    >
      {children}
    </UI>
  )
}

export default Card
Card.displayName = 'Card'
