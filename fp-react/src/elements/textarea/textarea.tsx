import React from "react"

export interface TextareaProps {
  children?: React.ReactNode
  styles?: object
  id?: string
  classes?: string
}

const Textarea: React.FC<TextareaProps> = ({
  styles,
  children,
  id = "textarea-id",
  classes,
  ...props
}) => {
  const defStyles = {
    borderStyle: "var(--ta-s, solid)",
    borderWidth: "var(--ta-w, thin)",
    paddingInline: "var(--ta-x, .5rem)",
    paddingBlock: "var(--ta-y, .5rem)",
    minWidth: "var(--ta-min-w, min(100vw, 50vw))",
    minHeight: "var(--ta-min-h, calc(100rem / 16))"
  }
  return (
    <div style={{ minWidth: 'min(80vw, 100%)'}}>
      <textarea
        id={id}
        className={classes}
        style={styles ?? defStyles}
        {...props}
      >
        {children ??
          "Cillum ea cillum veniam enim ipsum minim."}
      </textarea>
    </div>
  )
}

export default Textarea
