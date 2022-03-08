import * as React from "react"

export interface GridProps {
  /**
   * The grid's children elements.
   */
  children?: React.ReactNode
  /**
   * Grid styles object
   */
  styles?: object
  /**
   * Class names
   */
  classes?: string
}

const Grid: React.FC<GridProps> = ({
  children,
  styles,
  classes,
  ...props
}) => {
  const gridStyles = {
    display: "var(--gird-dsp, grid)",
    gridTemplateColumns:
      "var(--gird-cols, repeat(auto-fill, calc(100% / 4)))",
    gridGap: "var(--gird-gap, 1em)"
  }
  return (
    <>
      <section role="grid" {...props}>
        <div
          role="row"
          style={{ ...gridStyles, ...styles }}
        >
          {children}
        </div>
      </section>
    </>
  )
}

export const GridCell: React.FC<GridProps> = ({
  children,
  ...props
}) => {
  return (
    <div role="gridcell" {...props}>
      {children}
    </div>
  )
}

export default Grid
