import FP from '../fp'
import { ComponentProps } from 'src/types'
export interface ImageProps extends ComponentProps {
  src?: string
  alt: string
  width: number
  height?: number
  loading?: 'eager' | 'lazy'
  placeholder?: string
  fetchpriority?: 'high' | 'low'
  decoding?: 'sync' | 'async' | 'auto'
  imgError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
  imgLoaded?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}

// type ImgProps = ImageProps & ComponentProps

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
export const Img = ({
  src,
  alt,
  width = 480,
  height,
  styles,
  renderStyles = true,
  loading = 'lazy',
  placeholder = `https://via.placeholder.com/${width}?text=PLACEHOLDER`,
  fetchpriority = 'low',
  decoding = 'auto',
  imgLoaded,
  imgError,
  ...props
}: ImageProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}

  const handleImgError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void => {
    if (imgError) {
      imgError?.(e)
      return
    }
    if (e.currentTarget.src !== placeholder) {
      e.currentTarget.src = placeholder
    }
  }

  const handleImgLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ): void => {
    imgLoaded?.(e)
  }

  return (
    <FP
      as="img"
      src={src}
      alt={alt}
      width={width}
      height={height || 'auto'}
      loading={loading}
      style={{ ...styles, ...stylesObj }}
      onError={handleImgError}
      onLoad={handleImgLoad}
      {...props}
    />
  )
}

Img.displayName = 'Img'
