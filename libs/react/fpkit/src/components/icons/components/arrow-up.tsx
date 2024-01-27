import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
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
  strokeColor = 'currentColor',
  styles,
  size = 16,
  role = 'img',
  alt = 'Up arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} styles={styles} role={role} alt={alt} {...props}>
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
    </Svg>
  )
}

export default ArrowUp
ArrowUp.displayName = 'ArrowUp'
ArrowUp.style = defaultStyles
