import React from "react"

type FpFigProps = {
  /**
   * The children of the figure
   */
  children: React.ReactNode
  /**
   * The classes of the figure
   */
  classes?: string
  /**
   * The styles of the figure
   */
  styles?: any
  /**
   * The width of the figure
   */
  width?: string
  /**
   * The height of the figure
   */
  height?: string
}

/**
 * Images are displayed in blocks by default
 * The image box wrapper allows you to wrap the image
 * in a the picture and change the display without removing
 * the block display.
 */
const FpFig: React.FC<FpFigProps> = ({
  children,
  styles,
  classes,
  width,
  height,
  ...props
}) => {
  const defStyles = {
    width: "var(--pic-w, 500px)",
    height: "var(--pic-h, auto)"
  }
  return (
    <figure
      className={classes}
      style={{ ...defStyles, ...styles }}
    >
      {children}
    </figure>
  )
}

export const FpCaption: React.FC<FpFigProps> = ({
  children,
  styles,
  classes,
  ...props
}) => {
  return (
    <figcaption
      className={classes}
      style={styles}
      {...props}
    >
      {children}
    </figcaption>
  )
}

export default FpFig
