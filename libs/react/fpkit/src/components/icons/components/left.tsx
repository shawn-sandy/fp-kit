import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
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
  size = 16,
  styles,
  role = 'img',
  alt = 'Left arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} styles={styles} alt={alt} role={role} {...props}>
      <g fill={fill}>
        <path
          d="M17,23a1,1,0,0,1-.707-.293l-10-10a1,1,0,0,1,0-1.414l10-10a1,1,0,0,1,1.414,1.414L8.414,12l9.293,9.293A1,1,0,0,1,17,23Z"
          fill={fill}
        />
      </g>
    </Svg>
  )
}

export default Left
Left.displayName = 'Left'
Left.styles = defaultStyles
