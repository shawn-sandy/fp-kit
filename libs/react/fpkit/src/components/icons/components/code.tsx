import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
  fill: 'none',
  stroke: 'currentColor',
}

export const Code = ({
  strokeColor = 'currentColor',
  fill = 'none',
  size = 16,
  styles,
  role = 'img',
  alt = 'Code icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
> = {}) => {
  return (
    <Svg size={size} role={role} alt={alt} styles={styles} {...props}>
      <g
        fill={fill}
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <rect
          height="22"
          width="18"
          fill="none"
          stroke={strokeColor}
          x="3"
          y="1"
        />
        <polyline fill="none" points="9 9 6 12 9 15" />
        <polyline fill="none" points="15 15 18 12 15 9" />
      </g>
    </Svg>
  )
}

export default Code
Code.styles = defaultStyles
