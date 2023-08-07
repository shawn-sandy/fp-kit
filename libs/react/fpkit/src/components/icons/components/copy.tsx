import { IconProps } from '../types'
import React from 'react'

const defaultStyles = {
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
  size = '24',
  strokeColor = 'currentColor',
  styles,
  role = 'img',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role'
>): JSX.Element => {
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
    </svg>
  )
}

export default Copy
Copy.displayName = 'Copy'
Copy.styles = defaultStyles
