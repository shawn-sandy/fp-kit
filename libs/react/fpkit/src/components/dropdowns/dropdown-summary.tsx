// import { defStyles } from "@fpkit/fp-button/lib/components/button"
import FP from '../fp'

export interface SummaryPros {
  children: React.ReactNode
  styles?: {}
  renderStyles?: boolean
}

export const defaultStyles = {
  listStyle: 'none',
  justifyContent: 'var(--summary-justify, space-between)',
  color: 'var(--summary-color, currentColor)',
  cursor: 'var(--detail-cursor, pointer)',
}

export const Summary = ({
  children,
  styles,
  renderStyles = true,
  ...props
}: SummaryPros) => {
  return (
    <FP as="summary" styles={styles} {...props}>
      {children}
    </FP>
  )
}

Summary.styles = defaultStyles
Summary.displayName = 'Summary'
export default Summary
