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

const BreadcrumbNav = ({
  styles,
  id,
  classes,
  children,
  ...props
}: React.ComponentProps<typeof UI>) => {
  return (
    <UI as="nav" id={id} styles={styles} classNames={classes} {...props}>
      <ul data-list="unstyled inline" {...props}>
        {children}
      </ul>
    </UI>
  )
}

const BreadcrumbItems = ({
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

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  startRoute = 'Home',
  currentRoute,
  spacer = <>&#47;</>,
  routes,
  styles,
  id,
  classes,
  ...props
}) => {
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
      <BreadcrumbNav
        as="nav"
        id={id}
        {...props}
        styles={styles}
        classNames={classes}
      >
        <li>
          <a href="/">{startRoute}</a>
        </li>
        {segments.length &&
          segments.map((segment: any) => {
            const currentSegment = getPathName(segment)
            if (currentSegment?.name) {
              return (
                <>
                  <li key={`${segment?.name}-${uuid}`}>
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
                  </li>
                </>
              )
            } else {
              return <></>
            }
          })}
        <li>
          {<span>{spacer}</span>}
          <a href="" aria-current="page">
            {segments[lastSegment]}
          </a>
        </li>
      </BreadcrumbNav>
    )
  } else {
    return null
  }
}

export default Breadcrumb
Breadcrumb.displayName = 'BreadCrumb'
