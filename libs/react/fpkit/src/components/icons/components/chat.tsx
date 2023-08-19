import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = { ...Svg.styles }

/**
 * @param {string} size - The width and height of the icon in pixels. Defaults to 24.
 * @param {string} strokeColor - The color of the icon stroke. Defaults to 'currentcolor'.
 * @param {React.CSSProperties} styles - Additional CSS styles to apply to the icon.
 * @param {IconProps} props - Additional props to pass to the SVG element.
 * @returns {JSX.Element} - A chat icon component that displays a speech bubble with lines representing text.
 */
export const Chat = ({
  size = 16,
  strokeColor = 'currentcolor',
  styles,
  role = 'img',
  alt = 'Chat icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>): JSX.Element => {
  return (
    <Svg size={size} styles={styles} role={role} alt={alt} {...props}>
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
    </Svg>
  )
}

export default Chat
Chat.styles = defaultStyles
Chat.displayName = 'Chat'
