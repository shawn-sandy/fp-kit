import React, { Component } from 'react'
import Landmarks from '#components/layout/landmarks'
import { ComponentProps } from '#types'

export enum HeaderVariants {
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
  /** The title of the page header */
  headerTitle: string
  /** The subtitle of the page header (optional) */
  headerSubtitle?: string
  /** The variant of the page header (optional) */
  variant?: HeaderVariants
  /** The children of the page header (optional) */
  children?: React.ReactNode
} & Pick<ComponentProps, 'styles'>

const defaultStyles = {}

/**
 * PageHeader component
 *
 * Renders a page header with title, subtitle, variant and children.
 *
 * @param {PageHeaderProps} props - Component props
 * @param {string} props.headerTitle - The title of the header
 * @param {string} [props.headerSubtitle] - Optional subtitle
 * @param {HeaderVariants} [props.variant] - Visual variant
 * @param {ReactNode} [props.children] - Content inside the header
 * @param {Object} [props.styles] - CSS styles to apply
 *
 * @returns {ReactElement} The page header component
 */
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
    <Landmarks.Header styles={style} data-style={variant} {...props}>
      <h2>{headerTitle}</h2>
      {!!headerSubtitle && <h3>{headerSubtitle}</h3>}
      {children}
    </Landmarks.Header>
  )
}

export default PageHeader
PageHeader.displayName = 'PageHeader'
PageHeader.styles = defaultStyles
