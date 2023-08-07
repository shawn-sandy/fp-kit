import * as React from 'react'

import { IconProps } from '../types'

const defaultStyles = {}

/**
 * ArrowDown icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
export const ArrowDown = ({
  fill = 'currentColor',
  strokeColor,
  styles,
  size = '24',
  role = 'img',
  ...props
}: Pick<IconProps, 'strokeColor' | 'fill' | 'styles' | 'size' | 'role'>) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      role={role}
      {...props}
    >
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
    </svg>
  )
}

export default ArrowDown
ArrowDown.styles = defaultStyles
ArrowDown.displayName = 'ArrowDown'
