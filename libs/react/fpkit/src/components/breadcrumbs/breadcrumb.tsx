// Code: Breadcrumb component
import React from 'react'
import UI from '#components/ui'
import { Truncate } from '#libs/content'

// TYPES

type customRoute = {
  /** The path or id for routing */
  path?: string
  /** The display name */
  name: string
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
  /** Prefix breadcrumb aria-label - "prefix breadcrumb" */
  ariaLabelPrefix?: string
  /** Truncate breadcrumb text after this length */
  truncateLength?: number
} & React.ComponentProps<typeof UI>

// Components

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
    <li data-list="unstyled inline" {...props}>
      {children}
    </li>
  )
}

/**
 * List component.
 *
 * @param children - The content to render inside the list.
 * @param props - Additional props to pass to the UI component.
 */
const List = ({ children, ...props }: React.ComponentProps<typeof UI>) => {
  return (
    <UI as="ol" data-list="unstyled inline" {...props}>
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
    <UI as="nav" id={id} styles={styles} className={classes} {...props}>
      <List>{children}</List>
    </UI>
  )
}

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
  ariaLabelPrefix,
  truncateLength = 15,
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
  const getPathName = (pathSegment: string): customRoute => {
    const route = routes?.find((route) => route.path === pathSegment)

    return {
      path: route?.path || pathSegment,
      name: route?.name || pathSegment,
      url: route?.url || pathSegment,
    }
  }

  /** Array of path segments from current path */
  const segments = currentPath.split('/').filter((segment) => segment)
  /** Index of last item in segments array */
  const lastSegment = segments.length - 1

  /** Unique id for breadcrumb */
  const uuid = React.useId()

  return currentPath.length ? (
    <Nav
      id={id}
      {...props}
      styles={styles}
      className={classes}
      aria-label={ariaLabelPrefix}
    >
      <Items key={`${startRoute}-${uuid}`}>
        <a href="/">{startRoute}</a>
      </Items>
      {segments.length ? (
        segments.map((segment: any, index: number) => {
          const currentSegment = getPathName(segment)
          const { name, url, path } = currentSegment
          if (index === lastSegment) {
            return (
              <>
                {typeof segments[lastSegment] === 'string' &&
                  segments[lastSegment].length > 3 &&
                  segments[lastSegment] !== segments[lastSegment - 1] && (
                    <Items key={`${path || index}-${uuid}`}>
                      <>
                        <span aria-hidden="true">{spacer}</span>
                        <a
                          aria-current="page"
                          aria-label={
                            name.length > truncateLength ? name : undefined
                          }
                        >
                          {Truncate(decodeURIComponent(name), truncateLength)}
                        </a>
                      </>{' '}
                    </Items>
                  )}
              </>
            )
          } else {
            return (
              <Items key={`${currentSegment?.name}-${uuid}`}>
                <span aria-hidden="true">{spacer}</span>
                <span>
                  <a
                    href={url}
                    aria-label={name.length > truncateLength ? name : undefined}
                  >
                    {Truncate(decodeURIComponent(name), truncateLength)}
                  </a>
                </span>
              </Items>
            )
          }
        })
      ) : (
        <></>
      )}
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
