import React from 'react'
import FP from '../fp'
import { ComponentProps } from '../../types'
import { Code } from './index'

export interface IconProps extends Partial<ComponentProps> {
  fill?: string
  size?: string
  viewBox?: string
  name: string
}

export const defaultStyles = {
  display: 'flex-inline',
  direction: 'column',
  fill: 'currentColor',
}

export const Icon = ({
  children,
  styles = defaultStyles,
  ...props
}: IconProps) => {
  return (
    <FP as="span" styles={styles} data-style="icons" {...props}>
      {children}
    </FP>
  )
}

export default Icon
Icon.displayName = 'Icon'
Icon.styles = defaultStyles
Icon.Code = Code
