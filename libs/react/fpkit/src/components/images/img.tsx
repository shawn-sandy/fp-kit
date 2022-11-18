export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width: number
  height?: number
  styles?: {}
  loading?: 'eager' | 'lazy'
  renderStyles?: boolean
}

type ImgProps = ImageProps

export const defaultStyles = {
  width: 'var(--img-w, 100%)',
  height: 'var(--img-h, auto)',
  objectFit: 'var(--img-obj-fit, cover)',
  objectPosition: 'var(--img-position, center center)',
  aspectRatio: 'var(--img-ratio, auto 2/3)',
}

const Img = ({
  src,
  alt,
  width = 480,
  height,
  styles,
  renderStyles = true,
  loading = 'lazy',
  placeholder = 'https://via.placeholder.com/150?text=PLACEHOLDER',
  ...props
}: ImgProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}

  const handleImgError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void => {
    const img = e.currentTarget
    img.src = placeholder
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height || width}
      loading={loading}
      style={{ ...styles, ...stylesObj }}
      onError={handleImgError}
      {...props}
    />
  )
}

export default Img
