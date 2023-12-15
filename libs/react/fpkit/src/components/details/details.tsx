import React from 'react'
import FP from '#components/fp'
export type DetailsProps = {
  children: React.ReactNode
  styles?: React.CSSProperties | {}
}

const Details = ({ styles, children, ...props }: DetailsProps) => {
  const defaultStyles: React.CSSProperties = { ...styles }

  return (
    <FP as="details" {...props}>
      <FP as="summary">
        <FP as="section">Summary</FP>
      </FP>
      <FP as="section">{children}</FP>
    </FP>
  )
}

export default Details
Details.displayName = 'Details'
