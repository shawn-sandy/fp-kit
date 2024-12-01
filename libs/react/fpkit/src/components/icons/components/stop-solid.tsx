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
export const StopSolid = ({
  strokeColor = 'currentColor',
  styles,
  size = 24,
  role = 'img',
  alt = 'Stop icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} styles={styles} role={role} alt={alt} {...props}>
      <g fill={strokeColor}>
        <path
          fill={strokeColor}
          d="M22,1H2C1.447,1,1,1.447,1,2v20c0,0.553,0.447,1,1,1h20c0.553,0,1-0.447,1-1V2C23,1.447,22.553,1,22,1z"
        ></path>
      </g>
    </Svg>
  )
}

export default StopSolid
StopSolid.displayName = 'StopSolid'
StopSolid.style = defaultStyles
