import React from "react"


type LabelProps = {
  children: React.ReactNode
  classes?: string
  name?: string
  styles?: React.CSSProperties
}

/**
 * Label Component provides a wrapper for custom styled checkbox
 * using just CSS.
 * * Customs styles the default input checkbox
 * * Wraps a label around the checkbox
 * * Adds a click event to the checkbox
 * * Ensured that the label is accessible
 * * Full keyboard accessibility
 * * [Checkbox Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 * * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox)
 */
export const Label: React.FC<LabelProps> = ({
  name,
  classes,
  styles,
  children = "Default Checkbox",
  ...props
}) => {
  return (
    <label
      htmlFor={name}
      className={classes}
      style={styles}
      {...props}
    >
      {children}
    </label>
  )
}

type CheckboxProps = {
  classes?: string
  name: string
  styles?: React.CSSProperties
  click?: () => void
  value?: string
}

const Checkbox: React.VFC<CheckboxProps> = ({
  name,
  value,
  classes,
  styles,
  click,
  ...props
}) => {
  return (
    <input
      className={classes}
      style={styles}
      type="checkbox"
      id={name}
      value={value}
      onClick={click}
      {...props}
    />
  )
}

export default Checkbox
