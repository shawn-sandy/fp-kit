import React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

/**
 * Renders a right arrow icon.
 *
 * @param {string} size - The size of the icon.
 * @param {string} fill - The fill color of the icon.
 * @param {React.CSSProperties} styles - The styles to apply to the icon.
 * @param {IconProps} props - The props to pass down to the icon.
 * @returns {JSX.Element} - A right arrow icon.
 */
export const Right = ({
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
          d="M7,23a1,1,0,0,1-.707-1.707L15.586,12,6.293,2.707A1,1,0,0,1,7.707,1.293l10,10a1,1,0,0,1,0,1.414l-10,10A1,1,0,0,1,7,23Z"
          fill={fill}
        />
      </g>
    </svg>
  )
}

export default Right
Right.displayName = 'Right'
Right.styles = defaultStyles
