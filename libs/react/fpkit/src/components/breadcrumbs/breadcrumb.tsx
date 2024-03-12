// Code: Breadcrumb component
import React from 'react'
import UI from '#components/ui'

type customRoute = {
  path?: string | number
  name?: string
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

const List = ({ children, ...props }: React.ComponentProps<typeof UI>) => {
  return (
    <UI as="ul" data-list="unstyled inline" {...props}>
      {children}
    </UI>
  )
}

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

  const segments = currentPath.split('/').filter((segment) => segment)
  const lastSegment = segments.length - 1

  const uuid = React.useId()

  if (currentPath.length) {
    return (
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
                      <a href={currentSegment?.url}>
                        {isNaN(segment?.name) ? (
                          `${currentSegment?.name}`
                        ) : (
                          <span>{`Page ${currentSegment?.name}`}</span>
                        )}
                      </a>
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
          <a href="" aria-current="page">
            {segments[lastSegment]}
          </a>
        </Items>
      </Nav>
    )
  } else {
    return <></>
  }
}

export default Breadcrumb

Breadcrumb.displayName = 'BreadCrumb'
Breadcrumb.Nav = Nav
Breadcrumb.List = List
Breadcrumb.Items = Items
