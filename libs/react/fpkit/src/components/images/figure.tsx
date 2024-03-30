import React from 'react'
import UI from '#components/ui'
import Img from './img'

type FigureProps = {
  /** Children nodes to render inside the figure */
  children: React.ReactNode

  /** The figure caption */
  caption?: string
} & React.ComponentProps<typeof Img>

const Figure = ({
  id,
  src,
  width,
  height,
  alt = '',
  caption = 'Caption for the image here...',
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
