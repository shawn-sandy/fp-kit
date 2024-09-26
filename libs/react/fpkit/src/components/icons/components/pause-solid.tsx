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
export const PauseSolid = ({
  strokeColor = 'currentColor',
  styles,
  size = 24,
  role = 'img',
  alt = 'Pause arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} styles={styles} role={role} alt={alt} {...props}>
      <g fill={strokeColor}>
        <path
          d="M7,1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V2A1,1,0,0,0,7,1Z"
          fill={strokeColor}
        ></path>
        <path
          d="M22,1H17a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1Z"
          fill={strokeColor}
        ></path>
      </g>
    </Svg>
  )
}

export default PauseSolid
PauseSolid.displayName = 'PauseSolid'
PauseSolid.style = defaultStyles
