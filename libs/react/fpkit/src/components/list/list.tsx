import * as React from 'react'
import FP from '../fp'

type ListProps = {
  /** Type of list to render (default: 'ul') */
  type?: 'ul' | 'ol' | 'dl'
  /** variant of list to render (default: 'none') */
  variant?: string
} & React.ComponentProps<typeof FP>

export type ListItemProps = Omit<ListProps, 'type' | 'role'> & {
  /** Type of list item to render (default: 'li') */
  type?: 'li' | 'dt' | 'dd'
}

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
  ...props
}: ListItemProps) => {
  return (
    <FP id={id} as={type} {...props} style={styles}>
      {children}
    </FP>
  )
}

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
    <FP
      as={type}
      data-variant={variant}
      className={classes}
      style={styles}
      role={role}
      {...props}
    >
      {children}
    </FP>
  )
}

export default List
List.displayName = 'List'
List.ListItem = ListItem
