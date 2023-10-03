import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
  fill: 'none',
  stroke: 'currentColor',
}

export const User = ({
  size = 16,
  fill = 'none',
  strokeColor = 'currentColor',
  styles,
  alt = 'User Icon',
  role,
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} role={role} alt={alt} styles={styles} {...props}>
      <g
        fill={fill}
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <circle cx="12" cy="5.5" fill="none" r="4.5" />
        <path
          d="M12,14c-4.971,0-9,4.029-9,9H21c0-4.971-4.029-9-9-9Z"
          fill="none"
          stroke={strokeColor}
        />
      </g>
    </Svg>
  )
}

export default User
User.styles = defaultStyles
User.displayName = 'User'
