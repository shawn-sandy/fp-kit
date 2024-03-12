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
  const getPathName = (pathSegment: string | number): string | undefined => {
    const route = routes?.find((route) => route.path === pathSegment)
    return route ? route.name : undefined
  }

  const segments = currentPath.split('/').filter((segment) => segment)

  console.log({ segments })

  const uuid = React.useId()

  if (currentPath.length) {
    return (
      <nav>
        <ul aria-label="breadcrumb" data-list="unstyled inline" {...props}>
          <li>
            <a href="/">{startRoute}</a>
          </li>
          {segments.length &&
            segments.map((segment: any, index) => (
              <>
                {getPathName(segment) && (
                  <li key={`${segment}-${uuid}`}>
                    <span>{spacer} </span>
                    <span>
                      <a href={routes?.[index]?.url}>
                        {isNaN(segment) ? (
                          `${getPathName(segment)}`
                        ) : (
                          <span>{`Page ${segment}`}</span>
                        )}
                      </a>
                    </span>
                    {routes?.[index + 1]?.name}
                  </li>
                )}
              </>
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
