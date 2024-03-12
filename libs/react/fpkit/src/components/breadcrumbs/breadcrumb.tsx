// Code: Breadcrumb component
import React from 'react'

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
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  startRoute = 'Home',
  currentRoute,
  spacer = <>&larr;</>,
  routes,
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
   * @returns The name of the route matching the path segment if found, otherwise just returns the path segment.
   */
  const getPathName = (pathSegment: string | number) => {
    const route = routes?.find((route) => route.path === pathSegment)
    return route ? route.name : pathSegment
  }

  const segments = currentPath.split('/').filter((segment) => segment)

  if (currentPath.length) {
    return (
      <nav>
        <ul aria-label="breadcrumb" data-list="unstyled inline" {...props}>
          <li>
            <a href="/">{startRoute}</a>
          </li>
          {segments.length &&
            segments.map((segment: any, index) => (
              <li key={index}>
                <span>
                  <a href={`/${segments.slice(0, index + 1).join('/')}`}>
                    <span>{spacer}</span>
                    {isNaN(segment) ? (
                      `${getPathName(segment)}`
                    ) : (
                      <span>{`Page ${segment}`}</span>
                    )}
                  </a>
                </span>
              </li>
            ))}
        </ul>
      </nav>
    )
  } else {
    return null
  }
}

export default Breadcrumb
Breadcrumb.displayName = 'BreadCrumb'
