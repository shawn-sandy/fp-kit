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
export const Pause = ({
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
        stroke-linecap="square"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
      >
        <line
          fill="none"
          stroke={strokeColor}
          stroke-width="2"
          x1="9"
          y1="16"
          x2="9"
          y2="8"
        ></line>
        <line
          fill="none"
          stroke={strokeColor}
          stroke-width="2"
          x1="15"
          y1="16"
          x2="15"
          y2="8"
        ></line>
        <circle
          fill="none"
          stroke={strokeColor}
          stroke-width="2"
          cx="12"
          cy="12"
          r="11"
        ></circle>
      </g>
    </Svg>
  )
}

export default Pause
Pause.displayName = 'Pause'
Pause.style = defaultStyles
