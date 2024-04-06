import React from 'react'
import UI from '#components/ui'
import Img from './img'

export type FigureProps = {
  /** Children nodes to render inside the figure */
  children: React.ReactNode

  /** The figure caption */
  caption?: string
} & React.ComponentProps<typeof Img>

/**
 * @description Figure component props.
 *
 * @param id - The id of the figure element.
 * @param src - The image source url.
 * @param width - The image width.
 * @param height - The image height.
 * @param alt - Alternative text for the image.
 * @param caption - The figure caption text.
 * @param styles - CSS styles object.
 * @param props - Other props.
 */
const Figure = ({
  id,
  src,
  width,
  height,
  alt = '',
  caption = 'Caption (caption) for the image here...',
  styles,
  ...props
}: FigureProps) => {
  return (
    <UI as="figure" id={id} {...props} styles={styles}>
      <Img src={src} alt={alt} width={width} height={height} />
      {caption.length ? <UI as="figcaption">{caption}</UI> : <></>}
    </UI>
  )
}

export default Figure
Figure.displayName = 'Figure'
