import * as React from 'react'
import FP from '../fp'

export type ListProps = {
  /** Styles to be applied to the list */
  styles?: React.CSSProperties
  /** CSS classes to be applied to the list */
  classes?: string
  /** Children to be rendered inside the list */
  children: React.ReactNode
  /** Type of list to render (default: 'ul') */
  type: 'ul' | 'ol' | 'dl'
  /** variant of list to render (default: 'none') */
  variant: string
}

export type ListItemProps = Omit<ListProps, 'type'> & {
  /** Type of list item to render (default: 'li') */
  type: 'li' | 'dt' | 'dd'
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
  styles,
  children,
  ...props
}: ListItemProps) => {
  return (
    <FP as={type} {...props}>
      {children}
    </FP>
  )
}

/**
 * A component that renders a list.
 * @param children - The content to render inside the list.
 * @param classes - The CSS classes to apply to the list.
 * @param type - The type of list to render (ul or ol).
 * @param variant - The variant of the list.
 * @param styles - The inline styles to apply to the list.
 * @param props - Additional props to apply to the list.
 * @returns The rendered list component.
 */
export const List = ({
  children,
  classes,
  type = 'ul',
  variant,
  styles,
  ...props
}: ListProps) => {
  return (
    <FP
      as={type}
      data-variant={variant}
      className={classes}
      style={styles}
      {...props}
    >
      {children}
    </FP>
  )
}

export default List
List.displayName = 'List'
List.ListItem = ListItem
