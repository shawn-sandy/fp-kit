import React from 'react'
import FP from '../fp'

export interface TextProps {
  /**
   * HTML element
   */
  elm?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'a'
    | 'strong'
    | 'em'
    | 'small'
    | 's'
    | 'cite'
    | 'q'
    | 'dfn'
    | 'abbr'
    | 'time'
    | 'code'
    | 'var'
    | 'samp'
    | 'kbd'
    | 'sub'
    | 'sup'
    | 'i'
    | 'b'
    | 'u'
    | 'mark'
    | 'ruby'
    | 'rt'
    | 'rp'
    | 'bdi'
    | 'bdo'
    | 'span'
    | 'br'
    | 'wbr'
    | 'blockquote'
  children?: any
  text?: any
  styles?: {}
}

export const Text = ({
  elm = 'p',
  text,
  styles,
  children,
  ...props
}: TextProps) => {
  const style = styles as React.CSSProperties
  return (
    <FP as={elm} {...props} style={style}>
      {children || text}
    </FP>
  )
}

export interface TitleProps extends TextProps {
  /**
   * HTML headings
   */
  elm?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({ elm, children, styles, ...props }: TitleProps) => {
  return (
    <Text elm={elm} styles={styles as React.CSSProperties} {...props}>
      {children}
    </Text>
  )
}

export default Text

Text.displayName = 'Text'
Title.displayName = 'Title'
