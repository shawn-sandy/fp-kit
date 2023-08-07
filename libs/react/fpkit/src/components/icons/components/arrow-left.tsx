import * as React from 'react'

import { IconProps } from '../types'

const defaultStyles = {}

/**
 * Renders an arrow pointing to the left.
 *
 * @param {string} strokeColor - The color of the arrow's stroke.
 * @param {string} fill - The fill color of the arrow.
 * @param {string} size - The size of the arrow.
 * @param {object} styles - The styles to apply to the arrow.
 * @param {object} props - The additional props to pass to the SVG element.
 * @returns {JSX.Element} - A React component that renders an arrow pointing to the left.
 */
export const ArrowLeft = ({
  strokeColor = 'currentColor',
  fill = 'currentColor',
  size = '24',
  styles,
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
          stroke={strokeColor}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="2"
          x1="22"
          x2="2"
          y1="12"
          y2="12"
        />
        <polyline
          fill="none"
          points="9,19 2,12 9,5 "
          stroke={strokeColor}
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

export default ArrowLeft
ArrowLeft.styles = defaultStyles
ArrowLeft.displayName = 'ArrowLeft'
