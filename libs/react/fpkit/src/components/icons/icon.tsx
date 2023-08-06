import React from 'react'
import { ComponentProps } from '../../types'
import FP from '../fp'
import {
  Add,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Chat,
  Code,
  Copy,
  Home,
  Left,
  Minus,
  Remove,
  Right,
  User,
} from './index'

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
Icon.Add = Add
Icon.ArrowDown = ArrowDown
Icon.ArrowLeft = ArrowLeft
Icon.ArrowRight = ArrowRight
Icon.Chat = Chat
Icon.Code = Code
Icon.Copy = Copy
Icon.displayName = 'Icon'
Icon.Home = Home
Icon.Left = Left
Icon.Minus = Minus
Icon.Remove = Remove
Icon.Right = Right
Icon.styles = defaultStyles
Icon.User = User
