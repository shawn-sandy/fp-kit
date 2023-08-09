import {
  Add,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
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

import { ComponentProps } from '../../types'
import FP from '../fp'
import React from 'react'

export interface IconProps extends Partial<ComponentProps> {
  fill?: string
  size?: string
  viewBox?: string
  name?: string
}

export const defaultStyles = {
  display: 'inline-flex',
  direction: 'row',
  fill: 'currentColor',
  minWidth: 'fit-content',
  width: '1.5rem',
  gap: '.5rem',
}

/**
 * Icon component wraps svg in a div.
 * @param {IconProps} props - The props object for the Icon component.
 * @param {React.ReactNode} props.children - The children of the Icon component.
 * @param {Object} props.styles - The styles object for the Icon component.
 * @returns {JSX.Element} - The Icon component.
 */
export const Icon = ({ children, styles, ...props }: IconProps) => {
  return (
    <FP as="span" styles={styles} data-style="icons" {...props}>
      {children}
    </FP>
  )
}

export default Icon
Icon.displayName = 'Icon'
Icon.styles = defaultStyles
Icon.Add = Add
Icon.ArrowDown = ArrowDown
Icon.ArrowLeft = ArrowLeft
Icon.ArrowRight = ArrowRight
Icon.ArrowUp = ArrowUp
Icon.Chat = Chat
Icon.Code = Code
Icon.Copy = Copy
Icon.Home = Home
Icon.Left = Left
Icon.Minus = Minus
Icon.Remove = Remove
Icon.Right = Right
Icon.User = User
