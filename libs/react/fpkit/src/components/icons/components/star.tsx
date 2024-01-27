import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

export function Star({
  size = 16,
  fill,
  strokeColor = 'currentColor',
  styles,
  role = 'img',
  alt = 'Star icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) {
  return (
    <Svg size={size} alt={alt} styles={styles} role={role} {...props}>
      <g
        fill={fill}
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <polygon
          fill="none"
          points="12,2.49 15.09,8.75 22,9.754 17,14.628 18.18,21.51 12,18.262 5.82,21.51 7,14.628 2,9.754 8.91,8.75 "
          stroke={strokeColor}
        />
      </g>
    </Svg>
  )
}

export default Star
Star.displayName = 'Star'
