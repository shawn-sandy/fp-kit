import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
  fill: 'none',
  stroke: 'currentColor',
}

/**
 * Stop icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
export const Stop = ({
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
        <rect
          x="2"
          y="2"
          fill="none"
          stroke={strokeColor}
          stroke-width="2"
          width="20"
          height="20"
        ></rect>
      </g>
    </Svg>
  )
}

export default Stop
Stop.displayName = 'Stop'
Stop.style = defaultStyles
