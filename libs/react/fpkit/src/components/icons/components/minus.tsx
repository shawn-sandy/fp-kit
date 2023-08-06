import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

/**
 * Minus icon component
 * @param {string} size - Icon size (default: 24)
 * @param {string} fill - Icon fill color (default: 'currentColor')
 * @param {object} styles - Inline styles for the SVG element
 * @param {object} props - Any other SVG attributes
 * @returns {JSX.Element} - Rendered Minus icon component
 */
export const Minus = ({
  size = '24',
  fill = 'currentColor',
  styles,
  ...props
}: IconProps) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      {...props}
    >
      <g fill={fill}>
        <path
          d="M17,11H7c-.553,0-1,.447-1,1s.447,1,1,1h10c.553,0,1-.447,1-1s-.447-1-1-1Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Minus
Minus.displayName = 'Minus'
Minus.styles = defaultStyles
