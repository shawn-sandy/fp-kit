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
export const PlaySolid = ({
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
      <g fill={strokeColor}>
        <path
          fill={strokeColor}
          d="M20.555,11.168l-15-10c-0.307-0.204-0.702-0.224-1.026-0.05C4.203,1.292,4,1.631,4,2v20 c0,0.369,0.203,0.708,0.528,0.882C4.676,22.961,4.838,23,5,23c0.194,0,0.388-0.057,0.555-0.168l15-10C20.833,12.646,21,12.334,21,12 S20.833,11.354,20.555,11.168z"
        ></path>
      </g>
    </Svg>
  )
}

export default PlaySolid
PlaySolid.displayName = 'PlaySolid'
PlaySolid.style = defaultStyles
