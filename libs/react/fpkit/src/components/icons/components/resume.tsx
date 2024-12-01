import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
  fill: 'none',
  stroke: 'currentColor',
}

/**
 * Resume icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
export const Resume = ({
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
        <path
          d="M20 21L20 3"
          stroke={strokeColor}
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M4 4L4 20L16 12L4 4Z"
          stroke={strokeColor}
          stroke-width="2"
          fill="none"
        ></path>
      </g>
    </Svg>
  )
}

export default Resume
Resume.displayName = 'Resume'
Resume.style = defaultStyles
