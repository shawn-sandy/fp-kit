// Code: Breadcrumb component
import React from 'react'
import UI from '#components/ui'

/**
 * List component.
 *
 * @param children - The content to render inside the list.
 * @param props - Additional props to pass to the UI component.
 */
const List = ({ children, ...props }: React.ComponentProps<typeof UI>) => {
  return (
    <UI as="ul" data-list="unstyled inline" {...props}>
      {children}
    </UI>
  )
}

/**
 * Nav component.
 *
 * @param styles - Styles object for the nav.
 * @param id - Id for the nav.
 * @param classes - Class names for the nav.
 * @param children - Child components.
 * @param props - Other props.
 */
const Nav = ({
  styles,
  id,
  classes,
  children,
  ...props
}: React.ComponentProps<typeof UI>) => {
  return (
    <UI as="nav" id={id} styles={styles} classNames={classes} {...props}>
      <List>{children}</List>
    </UI>
  )
}

/**
 * Items component.
 *
 * @param styles - Styles object for the item.
 * @param id - Id for the item.
 * @param classes - Class names for the item.
 * @param children - Child components.
 * @param props - Other props.
 */
const Items = ({
  styles,
  id,
  classes,
  children,
  ...props
}: React.ComponentProps<typeof UI>) => {
  return (
    <li aria-label="breadcrumb" data-list="unstyled inline" {...props}>
      {children}
    </li>
  )
}

type customRoute = {
  /** The path or id for routing */
  path?: string | number
  /** The display name */
  name?: string
  /** The url if linking out */
  url?: string
}

type BreadcrumbProps = {
  /** Array of custom route objects */
  routes?: customRoute[]
  /** Starting route node */
  startRoute?: React.ReactNode
  /** Spacer node between routes */
  spacer?: React.ReactNode
  /** String representing current route */
  currentRoute?: string
} & React.ComponentProps<typeof UI>

/**
 * Navigation component for breadcrumbs.
 *
 * @param props - Props for the navigation component.
 * @param props.startRoute - Starting route node. Default 'Home'.
 * @param props.currentRoute - String representing current route.
 * @param props.spacer - Spacer node between routes. Default '&#47;'.
 * @param props.routes - Array of custom route objects.
 * @param props.styles - Styles object for the nav.
 * @param props.id - Id for the nav.
 * @param props.classes - Class names for the nav.
 * @param props.children - Child components.
 */
export const Breadcrumb = ({
  startRoute = 'Home',
  currentRoute,
  spacer = <>&#47;</>,
  routes,
  styles,
  id,
  classes,
  ...props
}: BreadcrumbProps): React.JSX.Element => {
  const [currentPath, setCurrentPath] = React.useState('')
  React.useEffect(() => {
    const path = currentRoute || window.location.pathname
    if (path.length) {
      setCurrentPath(path)
    }
  }, [])

  /**
   * Gets the path name for the given path segment.
   *
   * @param pathSegment - The path segment (string or number) to get the path name for.
   * @returns The path name object for the given path segment.
   */
  const getPathName = (pathSegment: string | number): customRoute => {
    const route = routes?.find((route) => route.path === pathSegment)
    // return route ? route.name : undefined
    return {
      path: route?.path,
      name: route?.name,
      url: route?.url,
    }
  }

  /** Array of path segments from current path */
  const segments = currentPath.split('/').filter((segment) => segment)
  /** Index of last item in segments array */
  const lastSegment = segments.length - 1

  /** Unique id for breadcrumb */
  const uuid = React.useId()

  return currentPath.length ? (
    <Nav as="nav" id={id} {...props} styles={styles} classNames={classes}>
      <Items>
        <a href="/">{startRoute}</a>
      </Items>
      {segments.length &&
        segments.map((segment: any) => {
          const currentSegment = getPathName(segment)
          if (currentSegment?.name) {
            return (
              <>
                <Items key={`${segment?.name}-${uuid}`}>
                  <span>{spacer}</span>
                  <span>
                    <a href={currentSegment?.url}>{currentSegment?.name}</a>
                  </span>
                </Items>
              </>
            )
          } else {
            return <></>
          }
        })}
      <Items>
        {<span>{spacer}</span>}
        {isNaN(segments[lastSegment]) && (
          <a href="" aria-current="page">
            {segments[lastSegment]}
          </a>
        )}
      </Items>
    </Nav>
  ) : (
    <></>
  )
}

export default Breadcrumb

Breadcrumb.displayName = 'BreadCrumb'
Breadcrumb.Nav = Nav
Breadcrumb.List = List
Breadcrumb.Items = Items
