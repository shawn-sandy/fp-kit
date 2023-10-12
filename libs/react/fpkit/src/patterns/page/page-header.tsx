import React, { Component } from 'react'
import Landmarks from '#components/layout/landmarks'
import { ComponentProps } from '#types'

enum HeaderVariants {
  Cover = 'cover',
  Banner = 'banner',
}

/**
 * Props for the PageHeader component
 * @param {string} title - The title of the page header
 * @param {string} [subtitle] - The subtitle of the page header (optional)
 * @param {HeaderVariants} [variant] - The variant of the page header (optional)
 * @param {React.ReactNode} [children] - The children of the page header (optional)
 * @param {ComponentProps['styles']} [styles] - The styles for the page header (optional)
 */
export type PageHeaderProps = {
  headerTitle: string
  headerSubtitle?: string
  variant?: HeaderVariants
  children?: React.ReactNode
} & Pick<ComponentProps, 'styles'>

const defaultStyles = {}

const PageHeader = ({
  headerTitle,
  headerSubtitle,
  variant,
  children,
  styles,
  ...props
}: PageHeaderProps) => {
  const style = { defaultStyles, ...styles }
  return (
    <Landmarks.Header styles={style} {...props}>
      <h2>{headerTitle}</h2>
      {!!headerSubtitle && <h3>{headerSubtitle}</h3>}
      {children}
    </Landmarks.Header>
  )
}

export default PageHeader
PageHeader.displayName = 'PageHeader'
PageHeader.styles = defaultStyles
