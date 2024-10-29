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
  title?: React.ReactNode
  footer?: React.ReactNode
} & React.ComponentProps<typeof UI>

/*
 * Title component
 *
 * Renders a title for the Card component using the UI component.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Title content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.styles] - Inline styles
 *
 * @returns {ReactElement} Title component
 */
export const Title = ({
  children,
  className,
  styles,
  as = 'h3',
  ...props
}: React.PropsWithChildren<{
  className?: string
  styles?: React.CSSProperties
  as?: React.ElementType
}>) => {
  return (
    <UI
      as={as}
      className={`card-title ${className || ''}`}
      styles={styles}
      {...props}
    >
      {children}
    </UI>
  )
}

Title.displayName = 'Title'

/*
 * CardContent component
 *
 * Renders the content of the Card component using the UI component with an article element.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.styles] - Inline styles
 *
 * @returns {ReactElement} CardContent component
 */
export const Content = ({
  children,
  className,
  styles,
  ...props
}: React.PropsWithChildren<{
  className?: string
  styles?: React.CSSProperties
}>) => {
  return (
    <UI
      as="article"
      className={`card-content ${className || ''}`}
      styles={styles}
      {...props}
    >
      {children}
    </UI>
  )
}

Content.displayName = 'Content'

/*
 * Footer component
 *
 * Renders a footer section for the Card component using the UI component.
 *
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Footer content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.styles] - Inline styles
 *
 * @returns {ReactElement} Footer component
 */
export const Footer = ({
  children,
  className,
  styles,
  ...props
}: React.PropsWithChildren<{
  className?: string
  styles?: React.CSSProperties
}>) => {
  return (
    <UI
      as="div"
      className={`card-footer ${className || ''}`}
      styles={styles}
      {...props}
    >
      {children}
    </UI>
  )
}

Footer.displayName = 'Footer'

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
  classes = 'shadow',
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
Card.Title = Title
Card.Content = Content
Card.Footer = Footer
