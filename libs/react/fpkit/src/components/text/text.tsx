import FP from '../fp'
import React from 'react'

export type TextElements =
  | 'p'
  | 'span'
  | 'a'
  | 'strong'
  | 'em'
  | 'small'
  | 's'
  | 'cite'
  | 'time'
  | 'code'
  | 'kbd'
  | 'sub'
  | 'sup'
  | 'i'
  | 'b'
  | 'u'
  | 'mark'
  | 'span'
  | 'blockquote'
export interface TextProps {
  /**
   * HTML element
   */
  elm?: TextElements
  children?: React.ReactNode
  text?: String
  styles?: React.CSSProperties | {}
}

export const Text = ({
  elm = 'p',
  text,
  styles,
  children,
  ...props
}: TextProps) => {
  return (
    <FP as={elm} styles={styles} {...props}>
      {children || text}
    </FP>
  )
}

export const Span = ({
  elm = 'span',
  children,
  styles,
  ...props
}: TextProps) => {
  return (
    <FP as={elm} styles={styles} {...props}>
      {children}
    </FP>
  )
}

export interface TitleProps {
  /**
   * HTML headings
   */
  elm?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode
  styles?: {}
}

export const Title = ({
  elm = 'h3',
  children,
  styles,
  ...props
}: TitleProps) => {
  return (
    <FP as={elm} styles={styles} {...props}>
      {children}
    </FP>
  )
}

export default Text

Text.displayName = 'Text'
Title.displayName = 'Title'
Span.displayName = 'Span'
