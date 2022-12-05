export interface ComponentProps {
  /**
   * The default child content/component to render.
   */
  children?: React.ReactNode
  /**
   * Use default component styles
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
  classes?: String
  /**
   * Style value for [data-style] attribute
   */
  dataStyle?: string
}
