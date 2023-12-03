import {
  Add,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Chat,
  Code,
  Copy,
  Down,
  Home,
  Left,
  Minus,
  Remove,
  Right,
  Star,
  Up,
  User,
} from './index'

import { ComponentProps } from '#/types'
import FP from '#components/fp'
import React from 'react'

/**
 * The default styles object for the Icon component.
 *
 * @property {string} display - Sets display to 'inline-flex' to make Icon inline.
 * @property {string} direction - Sets flex direction to 'row'.
 * @property {string} gap - Sets gap between items to '.2rem'.
 * @property {string} placeItems - Centers items vertically using 'center'.
 * @property {string} width - Sets width to 'auto' for automatic sizing.
 */
const defaultStyles = {
  display: 'inline-flex',
  direction: 'row',
  gap: '.2rem',
  placeItems: 'center',
  width: 'auto',
}

/**
 * Icon component wraps svg in a div.
 * @param {IconProps} props - The props object for the Icon component.
 * @param {React.ReactNode} props.children - The children of the Icon component.
 * @param {Object} props.styles - The styles object for the Icon component.
 * @returns {JSX.Element} - The Icon component.
 */
export const Icon = ({ children, styles, ...props }: ComponentProps) => {
  return (
    <FP as="span" styles={styles} data-icon data-style="icons" {...props}>
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
Icon.Star = Star
Icon.Up = Up
Icon.Down = Down
Icon.User = User
