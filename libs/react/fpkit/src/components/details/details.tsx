import React from 'react'
import FP from '#components/fp'
export type DetailsProps = {
  children: React.ReactNode
  summary: React.ReactNode
  styles?: React.CSSProperties | {}
}

const Details = ({ summary, styles, children, ...props }: DetailsProps) => {
  const defaultStyles: React.CSSProperties = { ...styles }

  return (
    <FP as="details" {...props}>
      <FP as="summary">{summary}</FP>
      <FP as="section">{children}</FP>
    </FP>
  )
}

export default Details
Details.displayName = 'Details'
