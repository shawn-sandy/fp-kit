import * as React from "react"
// import PropTypes, { InferProps } from "prop-types"

/**
 * Link Element.
 * Provides the heavy lifting for creating links
 * * Adds a click event to the link
 * * [Link `a` Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
 */
const FpLinks: React.FC<LinkProps> = ({
  to = "#",
  classes,
  styles,
  title,
  target,
  rel,
  download,
  children,
  ...props
}) => {
  return (
    <a
      href={to}
      className={classes}
      title={title}
      style={styles}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </a>
  )
}

interface LinkProps {
  /**
   * The link destination
   */
  to: string
  classes?: string
  styles?: any
  title?: string
  target?: string
  rel?: string
  download?: string
  children?: React.ReactNode
}

export const OpenTab: React.FC<LinkProps> = ({
  to = "#",
  classes,
  styles,
  title,
  target,
  rel,
  download,
  children,
  ...props
}) => {
  return (
    <FpLinks
      to={to}
      title={title}
      target="_blank"
      rel="nofollow noopener"
    >
      {children}
    </FpLinks>
  )
}

export default FpLinks
