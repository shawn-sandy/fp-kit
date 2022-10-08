import { defStyles } from "@fpkit/fp-button/lib/components/button"
import FP from "../fp"

export interface SummaryPros {
  children: React.ReactNode
  styl?: {}
  renderStyles?: boolean
}

const defaultStyles = {
  listStyle: "none",
  justifyContent: "var(--summary-justify, space-between)",
  color: "var(--summary-color, currentColor)",
  // paddingBlock: "var(--details-pd, 1.2rem)"
}

const Summary = ({ children, styl, renderStyles = true, ...props }: SummaryPros) => {
  const stylesObj = renderStyles ? defaultStyles : {}
  return (
    <FP
      as="summary"
      styles={{ ...stylesObj, ...styl }}
      {...props}
    >
      {children}
    </FP>
  )
}

export default Summary
