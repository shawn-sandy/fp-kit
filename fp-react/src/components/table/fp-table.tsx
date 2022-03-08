import * as React from "react"

export interface CommonProps {
  /**
   * The table's children.
   */
  children?: React.ReactNode
  /**
   * The table row type.
   */
  cell?: "td" | "th"
  /**
   * The table's styles.
   */
  styles?: any // !style not assignable
}

const FpTable: React.FC<CommonProps> = ({
  children,
  styles,
  ...props
}) => {
  const defStyles = {
    display: "var(--tbl-dsp, table)",
    width: "var(--tbl-width, 100%)",
    borderCollapse: "var(--tbl-collapse, collapse)",
    minWidth: "var(--tbl-min-w, 100%)"
  }
  return (
    <table style={{ ...defStyles, ...styles }} {...props}>
      {children}
    </table>
  )
}

export const FpTableHead: React.FC<CommonProps> = ({
  children,
  styles,
  ...props
}) => {
  const defStyles = {
    backgroundColor: "var(--tbl-head-bg, #f5f5f5)"
  }
  return (
    <thead style={{ ...defStyles, ...styles }}>
      {children}
    </thead>
  )
}

export const FpTableBody: React.FC<CommonProps> = ({
  children,
  ...props
}) => {
  return <tbody>{children}</tbody>
}

export const FpTableRow: React.FC<CommonProps> = ({
  children
}) => {
  return <tr>{children}</tr>
}

export const FpTableCell: React.FC<CommonProps> = ({
  cell = "td",
  children,
  ...props
}) => {
  const Type: any = cell
  return <Type>{children}</Type>
}

export default FpTable
