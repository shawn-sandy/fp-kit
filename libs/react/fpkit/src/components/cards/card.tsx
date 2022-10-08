import FP from "../fp"
import { ComponentProps } from "../../types"
import React from "react"

export interface CardProps extends ComponentProps {
  elm?: "div" | "aside"
}

export const defaultStyles = {
  padding: "var(--card-p, 1.6rem)",
  backgroundColor: "var(--card-bg, white)",
  boxShadow:
    "var(--card-shadow, 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1))",
  borderRadius: "var(--card-rds, 0.2ßrem)",
  border: "var(--card-brd, none)",
  color: "var(--card-cl, black)"
}

// const cardRef = React.useRef<HTMLDivElement | null>(null)

const Card = ({
  elm = "div",
  styl,
  children,
  renderStyles = true,
  ...props
}: CardProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}
  return (
    <FP
      as="div"
      styles={{
        ...stylesObj,
        ...styl
      }}
      renderStyles={renderStyles}
      {...props}
    >
      {children }
    </FP>
  )
}

export default Card
