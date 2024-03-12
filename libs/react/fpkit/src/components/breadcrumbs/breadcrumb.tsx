// Code: Breadcrumb component
import React from 'react'
import UI from '#components/ui'

type customRoute = {
  path?: string | number
  name?: string
  url?: string
}
type BreadcrumbProps = {
  routes?: customRoute[]
  startRoute?: React.ReactNode
  spacer?: React.ReactNode
  currentRoute?: string
} & React.ComponentProps<typeof UI>

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
   * @param pathSegment - The path segment to get the name for. This can be a string or number.
   *
   * @returns The name of the route matching the path segment if found, otherwise just returns undefined.
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
      <UI as="nav" id={id} {...props} styles={styles} classNames={classes}>
        <ul aria-label="breadcrumb" data-list="unstyled inline" {...props}>
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
                      <span>{spacer} </span>
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
            {<span>{spacer} </span>} {segments[lastSegment]}
          </li>
        </ul>
      </UI>
    )
  } else {
    return null
  }
}

export default Breadcrumb
Breadcrumb.displayName = 'BreadCrumb'
