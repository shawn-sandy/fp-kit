// import FP from '../fp'
import React from 'react'
import FP from '#components/fp'

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
  text?: string
} & InheritedProps

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
    <FP as={elm} id={id} styles={styles} className={classes} {...props}>
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
    <Text as={elm} id={id} styles={styles} className={classes} {...props}>
      {children}
    </Text>
  )
}

export default Text

Text.displayName = 'Text'
Title.displayName = 'Title'
