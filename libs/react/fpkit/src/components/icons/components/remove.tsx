import { IconProps } from '../types'
import React from 'react'
import Svg from './svg'

const defaultStyles = {
  fill: 'currenStyle',
}

/**
 * Remove icon component
 * @param {string} size - The size of the icon
 * @param {string} fill - The fill color of the icon
 * @param {object} styles - The styles to apply to the icon
 * @param {object} props - The additional props to pass to the icon
 * @returns {JSX.Element} - The Remove icon component
 */
export const Remove = ({
  size = 16,
  fill = 'currentColor',
  styles,
  role = 'img',
  alt = 'Remove icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} alt={alt} styles={styles} role={role} {...props}>
      <g fill={fill}>
        <path
          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
          fill={fill}
        />
      </g>
    </Svg>
  )
}

export default Remove
Remove.displayName = 'Remove'
Remove.styles = defaultStyles
