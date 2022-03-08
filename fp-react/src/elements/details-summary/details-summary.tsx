import * as React from "react"

interface DetailsProps {
  /**
   * Children elements
   */
  children: React.ReactNode
  /**
   * Element classes
   */
  classes?: string
  /**
   * Toggle event function
   */
  toggle?: (
    event: React.SyntheticEvent<HTMLDetailsElement>
  ) => void
  /**
   * Styles object
   */
  styles?: any | object
}

/**
 * `FpDetailsSummary` React Details Summary element
 *  * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 */
const Details: React.FC<DetailsProps> = ({
  children,
  classes,
  styles = {},
  toggle,
  ...rest
}) => {
  const defStyles = {
    fontSize: "var(--detail-fs, 1rem)",
    color: "var(--detail-cl, currentColor)",
    backgroundColor: "var(--detail-bg, #whitesmoke)"
  }
  const toggleElement = (
    event: React.SyntheticEvent<HTMLDetailsElement>
  ) => {
    if (event.currentTarget.open)
      // TODO: Add aria-expanded to the details element
      event.currentTarget.ariaExpanded = "true"
    else event.currentTarget.ariaExpanded = "false"
    // !TEST call toggle function
    if (typeof toggle === "function") toggle(event)
  }

  return (
    <details
      style={{ ...defStyles, ...styles }}
      className={classes}
      onToggle={toggleElement}
      {...rest}
    >
      {children}
    </details>
  )
}

export const Summary: React.FC<DetailsProps> = ({
  children = "Summary",
  classes,
  styles = {},
  ...rest
}) => {
  const defStyles = {
    padding: "var(--summary-pd, 0.8rem)",
    backgroundColor: "var(--summary-bg, transparent)",
    cursor: "var(--summary-cursor, pointer)"
  }
  return (
    <summary
      style={{ ...defStyles, ...styles }}
      className={classes}
      {...rest}
    >
      {children}
    </summary>
  )
}

export default Details
