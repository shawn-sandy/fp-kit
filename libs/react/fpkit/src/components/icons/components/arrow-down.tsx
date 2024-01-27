import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = { ...Svg.styles }

/**
 * ArrowDown icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
export const ArrowDown = ({
  fill = 'currentColor',
  styles,
  size = 16,
  role = 'img',
  alt = 'Down icon',
  ...props
}: Pick<IconProps, 'fill' | 'styles' | 'size' | 'role' | 'alt'>) => {
  return (
    <Svg size={size} role={role} styles={styles} alt={alt} {...props}>
      <g fill={fill} strokeMiterlimit="10">
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="2"
          x1="12"
          x2="12"
          y1="2"
          y2="22"
        />
        <polyline
          fill="none"
          points="19,15 12,22 5,15 "
          stroke={fill}
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2"
        />
      </g>
    </Svg>
  )
}

export default ArrowDown
ArrowDown.styles = defaultStyles
ArrowDown.displayName = 'ArrowDown'
