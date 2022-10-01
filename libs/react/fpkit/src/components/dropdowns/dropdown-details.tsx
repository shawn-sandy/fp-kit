import FP from "../fp"

export interface DropdownProps {
  children: React.ReactNode
  renderStyles?: boolean
  styl?: {}
  elm?: "div" | "aside",
  title: string
}

export const defaultStyles = {
  padding: "var(--card-p, 1.2rem)",
  backgroundColor: "var(--card-bg, white)"
}

const Dropdown = ({
  children,
  styl,
  renderStyles = true,
  ...props
}: DropdownProps) => {
  const styleObj = renderStyles ? styl : {}
  return (
    <FP
    as="details"
      styl={{
        ...defaultStyles
      }}
    >
      {children}
    </FP>
  )
}
 export default Dropdown
