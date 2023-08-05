import * as React from 'react'
import { IconProps } from '../types'

const defaultStyles = {}

export const Chat = ({
  size = '24',
  strokeColor = 'currentcolor',
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={strokeColor} strokeMiterlimit="10">
        <path
          d="M21,2H3c-1.105,0-2,.895-2,2V15c0,1.105,.895,2,2,2h5l4,5,4-5h5c1.105,0,2-.895,2-2V4c0-1.105-.895-2-2-2Z"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

export default Chat
Chat.styles = defaultStyles
Chat.displayName = 'Chat'
