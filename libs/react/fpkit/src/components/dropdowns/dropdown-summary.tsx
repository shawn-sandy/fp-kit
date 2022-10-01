import FP from "../fp"

export interface SummaryPros {
  children: React.ReactNode
  styl: {}
  renderStyles: boolean
}

const Summary = ({ children, styl, renderStyles = true, ...props }: SummaryPros) => {
  const stylesObj = renderStyles ? styl : {}
  return (
    <FP
      as="summary"
      styl={{
        ...stylesObj
      }}
      {...props}
    >
      {children}
    </FP>
  )
}

export default Summary
