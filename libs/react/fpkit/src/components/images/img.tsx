import FP from '../fp'
import { ComponentProps } from '../../types'

export interface ImgProps extends ComponentProps {
  src: string
  alt: string
  width?: string
  height?: string
  styles?: {}
  loading?: 'eager' | 'lazy'
}

export const defaultStyles = {}

const Img = ({
  src,
  alt,
  width,
  height,
  styles,
  renderStyles = true,
  loading = 'lazy',
  ...props
}: ImgProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}
  return (
    <FP
      as="img"
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      styles={{ ...defaultStyles }}
      {...props}
    />
  )
}

export default Img
