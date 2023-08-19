import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
  stroke: 'currentColor',
}

/**
 * Copy icon component
 * @param {string} size - The width and height of the icon
 * @param {string} strokeColor - The color of the icon stroke
 * @param {IconProps} props - The icon component props
 * @returns {JSX.Element} - A react JSX element representing the copy icon
 */
export const Copy = ({
  size = 16,
  strokeColor = 'currentColor',
  styles,
  role = 'img',
  alt = 'Copy icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>): JSX.Element => {
  return (
    <Svg size={size} styles={styles} role={role} alt={alt} {...props}>
      <g
        fill="none"
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <polyline
          fill="none"
          points="8 19 2 19 2 1 17 1 17 6"
          stroke={strokeColor}
        />
        <rect height="13" width="10" fill="none" x="12" y="10" />
      </g>
    </Svg>
  )
}

export default Copy
Copy.displayName = 'Copy'
Copy.styles = defaultStyles
