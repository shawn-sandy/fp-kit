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
  border: "var(--summary-border, solid 1px #ccc)",
  transition: "all 0.2s ease",
  backgroundColor: "var(--summary-bg, whitesmoke)",
  padding: "var(--details-pd, 1.2rem)",
  cursor: "var(--detail-cursor, pointer)",
  minWidth: "var(--summary-min-w, 80vw)",
  maxWidth: "var(--summary-min-w, 80vw)"
}

const Dropdown = ({
  styles,
  children,
  summary,
  toggle,
  renderStyles = true,
  ...props
}: DropdownProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}
  return (
    <Details
      styles={{ ...stylesObj, ...styles }}
      onToggle={toggle}
      {...props}
    >
      <Summary>{summary}</Summary>
      {children}
    </Details>
  )
}

export default Dropdown
