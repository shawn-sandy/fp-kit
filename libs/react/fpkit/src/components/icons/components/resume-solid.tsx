import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = {
  ...Svg.styles,
  fill: 'none',
  stroke: 'currentColor',
}

/**
 * Resume icon component
 * @param fill - Icon fill color
 * @param strokeColor - Icon stroke color
 * @param styles - Icon styles
 * @param size - Icon size
 */
export const ResumeSolid = ({
  strokeColor = 'currentColor',
  styles,
  size = 16,
  role = 'img',
  alt = 'Up arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} styles={styles} role={role} alt={alt} {...props}>
      <g fill={strokeColor}>
        <path
          fill={strokeColor}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 21.8685L17.8028 12L3 2.1315L3 21.8685Z"
        ></path>
        <path
          fill={strokeColor}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 2L19 22L21 22L21 2L19 2Z"
        ></path>
      </g>
    </Svg>
  )
}

export default ResumeSolid
ResumeSolid.displayName = 'ResumeSolid'
ResumeSolid.style = defaultStyles
