import React from 'react'
import FP from '../fp'
import { ComponentProps } from '../../types'
import { Code, Home, Add, ArrowLeft, Chat, ArrowDown } from './index'

export interface IconProps extends Partial<ComponentProps> {
  fill?: string
  size?: string
  viewBox?: string
  name?: string
}

export const defaultStyles = {
  display: 'flex-inline',
  direction: 'column',
  fill: 'currentColor',
  width: '1.5rem',
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
Icon.Home = Home
Icon.Add = Add
Icon.ArrowLeft = ArrowLeft
Icon.Chat = Chat
Icon.ArrowDown = ArrowDown
