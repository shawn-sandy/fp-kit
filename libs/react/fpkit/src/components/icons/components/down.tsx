import * as React from 'react'

import { IconProps } from '../types'
import Svg from './svg'

const defaultStyles = { ...Svg.styles }

export const Down = ({
  size = 16,
  fill = 'currentColor',
  styles,
  role = 'img',
  alt = 'Down arrow icon',
  ...props
}: Pick<
  IconProps,
  'strokeColor' | 'fill' | 'styles' | 'size' | 'role' | 'alt'
>) => {
  return (
    <Svg size={size} alt={alt} styles={styles} role={role} {...props}>
      <g fill={fill}>
        <path
          d="M12,18a1,1,0,0,1-.707-.293l-10-10A1,1,0,0,1,2.707,6.293L12,15.586l9.293-9.293a1,1,0,1,1,1.414,1.414l-10,10A1,1,0,0,1,12,18Z"
          fill={fill}
        />
      </g>
    </Svg>
  )
}

export default Down
Down.displayName = 'Down'
Down.styles = defaultStyles
