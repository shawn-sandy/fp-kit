import Details from "./dropdown-details"
import Summary from "./dropdown-summary"
import { ComponentProps } from "../../types"

export interface DropdownProps extends ComponentProps {
  title: string
  summary: React.ReactNode
  toggle?: (e: React.SyntheticEvent) => void
}

const defaultStyles = {
  display: "flex",
  placeContent: "flex-start",
  placeItems: "center",
  gap: ".7rem",
  justifyContent: "var(--summary-justify, space-between)",
  color: "var(--summary-color, currentColor)",
  padding: "var(--details-pd, 1.2rem)",
  listStyle: "var(--summary-ls, none)",
  cursor: "var(--detail-cursor, pointer)",
  borderBottom: "var(--summary-border, none)",
  transition: "all 0.2s ease",
  backgroundColor: "var(--summary-bg, whitesmoke)",
  minWidth: "var(--summary-min-w, 80vw)"
}

const Dropdown = ({
  styl,
  children,
  summary,
  title,
  toggle,
  renderStyles = true,
  ...props
}: DropdownProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}
  return (
    <Details
      title={title}
      styl={{ ...stylesObj, ...styl }}
      onToggle={toggle}
      {...props}
    >
      <Summary>{summary}</Summary>
      {children}
    </Details>
  )
}

export default Dropdown
