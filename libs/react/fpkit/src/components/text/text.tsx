import FP from '../fp'
import React from 'react'

type InheritedProps = React.ComponentProps<typeof FP>

type TextElements =
  | 'a'
  | 'b'
  | 'blockquote'
  | 'cite'
  | 'code'
  | 'em'
  | 'i'
  | 'kbd'
  | 'mark'
  | 'p'
  | 's'
  | 'small'
  | 'span'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup'
  | 'time'
  | 'u'

export type TextProps = {
  /**
   * Text element to to use
   */
  elm?: TextElements
  /** Pass a text element or string */
  text?: String
} & InheritedProps

/**
 * Text component - renders text based components.
 * @param {Object} props - The props object.
 * @param {string} [props.elm='p'] - The HTML element to render.
 * @param {string} [props.id] - The id attribute.
 * @param {string} [props.text] - The text content.
 * @param {Object} [props.styles] - The styles object.
 * @param {Object} [props.classes] - The classes object.
 * @param {ReactNode} [props.children] - The children elements.
 * @param {Object} [props] - Any other props.
 * @returns {JSX.Element} - The Text component.
 */
export const Text = ({
  elm = 'p',
  id,
  text,
  styles,
  classes,
  children,
  ...props
}: TextProps) => {
  return (
    <FP as={elm} id={id} styles={styles} classNames={classes} {...props}>
      {children || text}
    </FP>
  )
}

type TitleProps = {
  /**
   * HTML headings
   */
  elm?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & InheritedProps

export const Title = ({
  elm = 'h3',
  id,
  children,
  styles,
  classes,
  ...props
}: TitleProps) => {
  return (
    <Text as={elm} id={id} styles={styles} className={styles} {...props}>
      {children}
    </Text>
  )
}

export default Text

Text.displayName = 'Text'
Title.displayName = 'Title'
