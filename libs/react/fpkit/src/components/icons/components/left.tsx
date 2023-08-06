import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

/**
 * Left arrow icon
 * @param {string} fill - Icon fill color (default: 'currentColor')
 * @param {string} size - Icon size (default: '24')
 * @param {React.CSSProperties} styles - Icon styles (default: {})
 * @param {IconProps} props - Any other valid props for an SVG element
 * @returns {JSX.Element} - Rendered icon component
 */
export const Left = ({
  fill = 'currentColor',
  size = '24',
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
          d="M17,23a1,1,0,0,1-.707-.293l-10-10a1,1,0,0,1,0-1.414l10-10a1,1,0,0,1,1.414,1.414L8.414,12l9.293,9.293A1,1,0,0,1,17,23Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Left
Left.displayName = 'Left'
