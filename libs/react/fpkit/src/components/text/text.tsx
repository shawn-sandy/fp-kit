import FP from '../fp'
import React from 'react'
import { ComponentProps } from '../../types'

export interface TextProps extends ComponentProps {
  /**
   * HTML element
   */
  elem?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a' | 'strong' | 'em' | 'small' | 's' | 'cite' | 'q' | 'dfn' | 'abbr' | 'time' | 'code' | 'var' | 'samp' | 'kbd' | 'sub' | 'sup' | 'i' | 'b' | 'u' | 'mark' | 'ruby' | 'rt' | 'rp' | 'bdi' | 'bdo' | 'span' | 'br' | 'wbr' | 'blockquote';
  children: React.ReactNode
}

export const Text = ({ elem = 'p', id, children }: TextProps) => {
  return (
    <FP as="p" id={id}>
      {children || "I'm a text component"}
    </FP>
  )
}

export interface TitleProps extends TextProps {
  /**
   * HTML headings
   */
  elem?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({ elem = 'h3', children}: TitleProps) => {
  return (
    <Text elem={elem}>
      {children}
    </Text>
  )
}

export default Text

Text.displayName = 'Text'
Title.displayName = 'Title'
