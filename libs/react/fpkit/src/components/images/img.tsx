import { ComponentProps } from "src/types"
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width: number
  height?: number
  loading?: 'eager' | 'lazy'
  imgLoaded?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}

type ImgProps = ImageProps & ComponentProps

export const defaultStyles = {
  maxWidth: 'var(--img-w, 100%)',
  height: 'var(--img-h, auto)',
  objectFit: 'var(--img-obj-fit, cover)',
  objectPosition: 'var(--img-position, center center)',
  aspectRatio: 'var(--img-ratio, auto 2/3)',
}

/**
 * This is a simple image component that can be used to display images
 * @param param
 * @returns
 */
const Img = ({
  src,
  alt,
  width = 480,
  height,
  styles,
  renderStyles = true,
  loading = 'lazy',
  placeholder = 'https://via.placeholder.com/150?text=PLACEHOLDER',
  imgLoaded,
  ...props
}: ImgProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}

  const handleImgError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void => {
    if (e.currentTarget.src !== placeholder) {
      e.currentTarget.src = placeholder
    }
  }

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    handleImgLoad?.(e)
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
      onLoad={imgLoaded}
      {...props}
    />
  )
}

export default Img
