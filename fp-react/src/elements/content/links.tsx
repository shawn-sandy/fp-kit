import * as React from "react"


export interface LinkProps {
  /**
   * The link destination
   */
  to: string
  /**
   * Classnames to be added to the link
   */
  classes?: string
  /**
   * The lins styles/props
   */
  styles?: any
  /**
   * The title attribute for links
   */
  title?: string
  /**
   * The target attribute for links
   */
  target?: string
  /**
   * The rel attribute for links
   */
  rel?: string
  /**
   * The download attribute for links
   */
  download?: string
  /**
   * The content to be displayed in the link
   */
  children?: React.ReactNode
}

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
