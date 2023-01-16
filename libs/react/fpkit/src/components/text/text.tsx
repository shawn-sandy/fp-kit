import FP from '../fp'
import { ComponentProps } from '../../types'

export interface TextProps extends ComponentProps {
  /**
   * HTML element
   */
  elem?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a';
}

export const Text = ({ elem = 'p', id, children, ...props }: TextProps) => {
  return (
    <FP as={elem} id={id} {...props}>
      {children}
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
