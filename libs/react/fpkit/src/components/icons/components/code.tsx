import * as React from 'react'
import { IconProps } from '../types'

const defaultStyles = {
  fill: 'currentColor',
}

/**
 * Renders a code icon.
 *
 * @param {string} strokeColor - The color of the icon's stroke.
 * @param {string} fill - The color of the icon's fill.
 * @param {string} size - The size of the icon.
 * @param {React.CSSProperties} renderStyles - Additional styles to apply to the icon.
 * @param {string} viewBox - The viewBox of the icon.
 * @param {string} name - The name of the icon.
 * @param {React.CSSProperties} styles - The default styles of the icon.
 * @param {IconProps} props - Additional props to apply to the icon.
 * @returns {JSX.Element} - A React component that renders an SVG icon.
 */
export const Code = ({
  strokeColor = 'currentColor',
  fill = 'currentColor',
  size = '24',
  renderStyles,
  viewBox,
  name,
  styles = defaultStyles,
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
      <g
        fill={fill}
        stroke={strokeColor}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <polyline fill="none" points="8 6 2 12 8 18" stroke={strokeColor} />
        <polyline fill="none" points="16 6 22 12 16 18" />
      </g>
    </svg>
  )
}

export default Code
Code.styles = defaultStyles
