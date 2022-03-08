import * as React from "react"

export interface LayoutProps {
  /**
   * The tag to use for the layout
   */
  tag?:
    | "section"
    | "div"
    | "main"
    | "header"
    | "footer"
    | "aside"
    | "article"
    | "nav"

  /**
   * The content to render
   */
  children: React.ReactNode
  /**
   * The styles to apply to the layout/container
   */
  styles?: object
  /**
   * The classes to apply to the layout/container
   */
  classes?: string
}

/**
 * The layout component is used to wrap content in a container
 * - Dynamic add tag name
 */
export const Container: React.FC<LayoutProps> = ({
  tag = "section",
  children,
  styles,
  classes,
  ...props
}) => {
  const Tag: any = tag
  const defStyles = {
    display: "var(--container-dsp, flex)",
    flexDirection: "var(--container-direction, column)"
  }

  return (
    <Tag
      className={classes}
      style={{ ...defStyles, ...styles }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export interface CardProps extends LayoutProps {
  /**
   * The tag to use for the card elements
   */
  elements?:
    | "div"
    | "aside"
    | "figure"
    | "blockquote"
    | "details"
}

export const Card: React.FC<CardProps> = ({
  elements = "div",
  children,
  styles,
  classes,
  ...props
}) => {
  const Tag: any = elements
  const defStyles = {
    "--card": "var(--cd-md)"
  }
  return (
    <Tag
      className={classes}
      style={{ ...defStyles, ...styles }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Container
