import FP from "../fp"

export interface SummaryPros {
  children: React.ReactNode
  styl?: {}
  renderStyles?: boolean
}

const Summary = ({ children, styl, renderStyles = true, ...props }: SummaryPros) => {
  const stylesObj = renderStyles ? styl : {}
  return (
    <FP
      as="summary"
      {...props}
    >
      {children}
    </FP>
  )
}

export default Summary
