import * as React from 'react'
import UI from '../ui'

type ListProps = {
  /** Type of list to render (default: 'ul') */
  type?: 'ul' | 'ol' | 'dl'
  /** variant of list to render (default: 'none') */
  variant?: string
} & React.ComponentProps<typeof UI>

export type ListItemProps = {
  /** Type of list item to render (default: 'li') */
  type?: 'li' | 'dt' | 'dd'
} & React.ComponentProps<typeof UI>

/**
 * ListItem component
 * @param type - HTML tag type for the list item (default: 'li')
 * @param styles - CSS styles object
 * @param children - Child elements to be rendered inside the list item
 * @param props - Additional props to be passed to the underlying HTML element
 * @returns A React component that renders a list item
 */
export const ListItem = ({
  type = 'li',
  id,
  styles,
  children,
  classes,
  ...props
}: ListItemProps) => {
  return (
    <UI id={id} as={type} className={classes} {...props} style={styles}>
      {children}
    </UI>
  )
}

/**
 * List component renders a list element with provided props
 * @param children - Child elements to render inside the list
 * @param classes - CSS classes to apply
 * @param type - Type of list element (default: 'ul')
 * @param variant - Variant for styling purposes
 * @param styles - Inline styles object
 * @param role - ARIA role
 * @param props - Additional props to pass to underlying element
 */
export const List = ({
  children,
  classes,
  type = 'ul',
  variant,
  styles,
  role,
  ...props
}: ListProps) => {
  return (
    <UI
      as={type}
      data-variant={variant}
      className={classes}
      style={styles}
      role={role}
      {...props}
    >
      {children}
    </UI>
  )
}

export default List
List.displayName = 'List'
List.ListItem = ListItem
