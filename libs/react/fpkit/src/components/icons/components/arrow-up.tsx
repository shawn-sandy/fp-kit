import * as React from 'react'

import { IconProps } from '../types'

const defaultStyles = {
  fill: 'none',
  stroke: 'currentColor',
}

/**
 * ArrowUp icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
export const ArrowUp = ({
  fill = 'currentColor',
  strokeColor = 'currentColor',
  styles,
  size = '24',
  ...props
}: IconProps) => {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" strokeLinecap="butt" x1="12" x2="12" y1="22" y2="2" />
        <polyline fill="none" points="5,9 12,2 19,9 " stroke={strokeColor} />
      </g>
    </svg>
  )
}

export default ArrowUp
ArrowUp.displayName = 'ArrowUp'
ArrowUp.style = defaultStyles
