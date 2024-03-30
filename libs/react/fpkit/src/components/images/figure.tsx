import React from 'react'
import UI from '#components/ui'
import Img from './img'

export type FigureProps = {
  children: React.ReactNode
  caption: string
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
      <Img src="/path/to/image.jpg" alt={alt} width={width} height={height} />
      <UI as="figcaption">{caption}</UI>
    </UI>
  )
}

export default Figure
Figure.displayName = 'Figure'
