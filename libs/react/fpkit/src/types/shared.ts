export interface ComponentProps {
  /**
   * The default child content/component to render.
   */
  children?: React.ReactNode
  /**
   * Use defaylt component styles
   */
  renderStyles?: boolean
  /**
   * Component id attribute
   */
  id?: string
  /**
   * Styles object
   */
  styles?: {}
  /**
   * Component class attribute
   */
  classes?: string
  /**
   * Style value for [data-style] attribute
   */
  dataStyle?: string
}

export interface SharedInputProps extends ComponentProps {
  /**
   * The input name
   */
  name?: string
  /**
   * The input value
   */
  value?: string
  /**
   * The input placeholder
   */
  placeholder?: string
  /**
   * Input is required or not
   */
  required?: boolean
  /**
   * Input id attribute
   */
  id: string
  /**
   * Set the element as disabled
   */
  disabled?: boolean
  /**
   * Set the element as readonly
   */
  readonly?: boolean
}
