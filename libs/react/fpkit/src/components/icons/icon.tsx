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
Icon.displayName = 'Icon'
Icon.styles = defaultStyles
Icon.Code = Code
Icon.Home = Home
Icon.Add = Add
Icon.ArrowLeft = ArrowLeft
Icon.Chat = Chat
Icon.ArrowDown = ArrowDown
Icon.ArrowRight = ArrowRight
Icon.User = User
Icon.Right = Right
Icon.Left = Left
Icon.Remove = Remove
Icon.Minus = Minus
