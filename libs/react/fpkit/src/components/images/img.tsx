import FP from '../fp'
import { ComponentProps } from 'src/types'

/*
 * ImageProps interface
 *
 * Extends ComponentProps and defines additional props for the Img component.
 *
 * @property {string} [src] - The image source URL
 * @property {string} alt - Required alt text for image accessibility
 * @property {number} width - Required width of image
 * @property {number} [height] - Optional height of image
 * @property {"eager" | "lazy"} [loading="lazy"] - Loading behavior
 * @property {string} [placeholder] - Fallback placeholder image
 * @property {"high" | "low"} [fetchpriority="low"] - Image fetch priority
 * @property {"sync" | "async" | "auto"} [decoding="auto"] - Decode setting
 * @property {function} [imgError] - Error callback
 * @property {function} [imgLoaded] - Loaded callback
 */

export interface ImageProps extends ComponentProps {
  alt: string
  src?: string
  width?: number
  height?: number
  loading?: 'eager' | 'lazy'
  placeholder?: string
  fetchpriority?: 'high' | 'low'
  decoding?: 'sync' | 'async' | 'auto'
  imgError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
  imgLoaded?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}

/*
 * Default styles object for the Img component.
 *
 * @property {string} maxWidth - Sets the max-width CSS property. Default is 'var(--img-w, 100%)'.
 * @property {string} height - Sets the height CSS property. Default is 'var(--img-h, auto)'.
 * @property {string} objectFit - Sets the object-fit CSS property. Default is 'var(--img-obj-fit, cover)'.
 * @property {string} objectPosition - Sets the object-position CSS property. Default is 'var(--img-position, center center)'.
 * @property {string} aspectRatio - Sets the aspect-ratio CSS property. Default is 'var(--img-ratio, auto 2/3)'.
 */

export const defaultStyles = {
  maxWidth: 'var(--img-w, 100%)',
  maxInlineSize: '100%',
  blockSize: 'var(--img-h, auto)',
  objectFit: 'var(--img-obj-fit, cover)',
  objectPosition: 'var(--img-position, center center)',
  aspectRatio: 'var(--img-ratio, auto 2/3)',
  display: 'var(--img-display, initial)',
}

/*
 * Img component
 *
 * Renders an <img> element with custom props.
 *
 * @param {string} src - The image source URL.
 * @param {string} alt - The alt text for the image.
 * @param {number} [width=480] - The width of the image.
 * @param {number} [height] - The height of the image.
 * @param {Object} [styles] - Additional CSS styles to apply.
 * @param {boolean} [renderStyles=true] - Whether to render the default styles.
 * @param {"eager" | "lazy"} [loading="lazy"] - The loading attribute.
 * @param {string} [placeholder] - A placeholder image URL.
 * @param {"high" | "low"} [fetchpriority="low"] - The fetchpriority attribute.
 * @param {"sync" | "async" | "auto"} [decoding="auto"] - The decoding attribute.
 * @param {function} [imgLoaded] - Callback when image loads successfully.
 * @param {function} [imgError] - Callback when image errors.
 *
 * @returns {JSX.Element} The Img component.
 */
export const Img = ({
  src,
  alt,
  width = 480,
  height,
  styles,
  loading = 'lazy',
  placeholder = `https://via.placeholder.com/${width}?text=PLACEHOLDER`,
  fetchpriority = 'low',
  decoding = 'auto',
  imgLoaded,
  imgError,
  ...props
}: ImageProps) => {
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
      style={styles}
      onError={handleImgError}
      onLoad={handleImgLoad}
      {...props}
    />
  )
}
Img.styles = defaultStyles
Img.displayName = 'Img'
