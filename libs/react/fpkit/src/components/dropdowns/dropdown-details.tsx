import FP from "../fp"
import { ComponentProps } from "../../types"
export interface DropdownProps extends ComponentProps {
  elm?: "div" | "aside",
  title: string,
  children: React.ReactNode,
  onToggle?: (e: React.SyntheticEvent) => void
}

export const defaultStyles = {
  padding: "var(--card-p, 1.2rem)",
  backgroundColor: "var(--card-bg, white)"
}

const Details = ({
  title,
  children,
  styl,
  renderStyles = true,
  onToggle,
  ...props
}: DropdownProps) => {
  const styleObj = renderStyles ? styl : {}
  const handleToggle = (e: React.SyntheticEvent) => {
    onToggle?.(e)
  }
  return (
    <FP
    as="details"
    title={title}
    onToggle={handleToggle}
      styl={{
        ...styleObj, ...styl
      }}
    >
      {children}
    </FP>
  )
}
 export default Details
