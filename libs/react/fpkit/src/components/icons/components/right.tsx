import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

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
  size = 16,
  fill = 'currentColor',
  styles,
  role = 'img',
  alt = 'Right arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} alt={alt} styles={styles} role={role} {...props}>
      <g fill={fill}>
        <path
          d="M7,23a1,1,0,0,1-.707-1.707L15.586,12,6.293,2.707A1,1,0,0,1,7.707,1.293l10,10a1,1,0,0,1,0,1.414l-10,10A1,1,0,0,1,7,23Z"
          fill={fill}
        />
      </g>
    </Svg>
  )
}

export default Right
Right.displayName = 'Right'
Right.styles = defaultStyles
