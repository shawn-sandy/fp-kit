import { ComponentProps } from '#/types'

export interface IconProps extends Partial<ComponentProps> {
  fill?: string
  size?: number
  strokeColor?: string
  strokeWidth?: string
  role?: string
  alt?: string
  width?: number
  height?: number
}
