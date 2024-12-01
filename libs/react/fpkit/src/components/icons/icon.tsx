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
  Play,
  Pause,
  Stop,
  Resume,
  PlaySolid,
  PauseSolid,
  ResumeSolid,
  StopSolid
} from './index'

import UI from '#components/ui'
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

export type IconProps = React.ComponentProps<typeof UI>

export const Icon = ({
  id,
  classes,
  children,
  styles,
  ...props
}: IconProps) => {
  return (
    <UI
      id={id}
      as="span"
      styles={styles}
      className={classes}
      data-icon
      data-style="icons"
      {...props}
    >
      {children}
    </UI>
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
Icon.Play = Play
Icon.Pause = Pause
Icon.Stop = Stop
Icon.Resume = Resume
Icon.ResumeSolid = ResumeSolid
Icon.PlaySolid = PlaySolid
Icon.PauseSolid = PauseSolid
Icon.StopSolid = StopSolid
