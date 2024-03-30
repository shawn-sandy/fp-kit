import React from 'react'
import UI from '#components/ui'

export type FigureProps = {
  children: React.ReactNode
}

const defaultStyles = {}

const Figure = ({ children, ...props }: FigureProps) => {
  return <UI {...props}>{children}</UI>
}

export default Figure
Figure.displayName = 'Figure'
Figure.styles = defaultStyles
