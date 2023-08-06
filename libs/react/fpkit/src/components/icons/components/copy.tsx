import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  stroke: 'currentColor',
}
export const Copy = ({
  size = '24',
  strokeColor = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <polyline
          fill="none"
          points="8 19 2 19 2 1 17 1 17 6"
          stroke={strokeColor}
        />
        <rect height="13" width="10" fill="none" x="12" y="10" />
      </g>
    </svg>
  )
}

export default Copy
Copy.displayName = 'Copy'
Copy.styles = defaultStyles
