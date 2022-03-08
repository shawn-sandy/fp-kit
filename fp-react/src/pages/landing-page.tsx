import * as React from "react"

import Container from "../elements/container/container"

/**
 * landing layout component for a landing page
 * @param param0
 * @returns
 */
const LandingPage: React.FC<LandingPageProps> = ({
  children,
  header = "Heading Section",
  footer = "Footer Section"
}) => {
  return (
    <>
      <Container tag="header">{header}</Container>

      <Container tag="section">{children}</Container>

      <Container tag="footer">{footer}</Container>
    </>
  )
}

interface LandingPageProps {
  children?: React.ReactNode
  header?: string | React.ReactNode
  footer?: string | React.ReactNode
}

export default LandingPage
