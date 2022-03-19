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
    display: "var(--dsp, flex)",
    borderStyle: "var(--ta-bdr-s, solid)",
    borderWidth: "var(--ta-bdr-w, thin)",
    paddingInline: "var(--ta-px, .5rem)",
    paddingBlock: "var(--ta-py, .5rem)",
    minWidth: "var(--ta-min-w, min(100vw, 50vw))",
    minHeight: "var(--ta-min-h,100px)"
  }
  return (
    <div style={{ minWidth: 'min(80vw, 100%)'}}>
      <textarea
        id={id}
        className={classes}
        style={defStyles ?? styles}
        {...props}
      >
        {children ??
          "Cillum ea cillum veniam enim ipsum minim."}
      </textarea>
    </div>
  )
}

export default Textarea
