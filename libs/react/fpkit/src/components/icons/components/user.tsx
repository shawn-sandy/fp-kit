import { IconProps } from '../types'
import React from 'react'

const defaultStyles = {
  fill: 'none',
  stroke: 'currentColor',
}

export const User = ({
  size = '24',
  fill = 'none',
  strokeColor = 'currentColor',
  styles,
  role,
  ...props
}: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role'>) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      style={styles}
      {...props}
    >
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
    </svg>
  )
}

export default User
User.styles = defaultStyles
User.displayName = 'User'
