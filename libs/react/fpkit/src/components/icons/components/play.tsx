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
export const Play = ({
  strokeColor = 'currentColor',
  styles,
  size = 24,
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
          d="M7 21L7 3L19 12L7 21Z"
          stroke={strokeColor}
          stroke-width="2"
          fill="none"
        ></path>{' '}
      </g>
    </Svg>
  )
}

export default Play
Play.displayName = 'PlayIcon'
Play.style = defaultStyles
