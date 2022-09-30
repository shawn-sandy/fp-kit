import FP from "../fp"

export interface CardProps {
  children: React.ReactNode
  renderStyles?: boolean
  styl?: {}
  elm?: "div" | "aside"
}

export const defaultStyles = {
  padding: "var(--card-p, 1.2rem)",
  backgroundColor: "var(--card-bg, white)",
  boxShadow:
    "var(--card-shadow, 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1))",
  borderRadius: "var(--card-rds, 0.2ßrem)",
  border: "var(--card-brd, none)",
  color: "var(--card-cl, black)"
}

const Card = ({
  elm,
  styl,
  children,
  renderStyles = true,
  ...props
}: CardProps) => {
  const stylesObj = renderStyles ? defaultStyles : {}
  return (
    <FP
      as={elm}
      styl={{
        ...stylesObj,
        ...styl
      }}
      {...props}
    >
      {children }
    </FP>
  )
}

export default Card
