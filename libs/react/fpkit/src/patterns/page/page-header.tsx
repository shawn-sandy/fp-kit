import React, { Component } from 'react'
import Landmarks from '#components/layout/landmarks'
import { ComponentProps } from '#types'
import { Link } from '#components/link/link'

export enum HeaderVariants {
  Cover = 'cover',
  Banner = 'banner',
}

export type headerLinkType = {
  url: string
  label: string
}

export type PageHeaderProps = {
  /** The title of the page header */
  headerTitle: string
  /** The subtitle of the page header (optional) */
  headerSubtitle?: string
  /** The variant of the page header (optional) */
  variant?: HeaderVariants
  /** The children of the page header (optional) */
  children?: React.ReactNode
  /** The link of the page header (optional) */
  headerLink?: headerLinkType
} & React.ComponentProps<typeof Landmarks.Header>

const defaultStyles = {
  minHeight: 'var(--hdr-min-h, 30vh)',
}

/**
 * PageHeader component
 *
 * Renders a page header with title, subtitle, variant and children.
 *
 * @param {PageHeaderProps} props - Component props
 * @param {string} props.headerTitle - The title of the header
 * @param {string} [props.headerSubtitle] - Optional subtitle
 * @param {HeaderVariants} [props.variant] - Visual variant
 * @param {ReactNode} [props.headerBackground] - Background element to render inside the header
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
  headerBackground,
  ...props
}: PageHeaderProps) => {
  const style = { defaultStyles, ...styles }
  return (
    <Landmarks.Header
      headerBackground={headerBackground}
      styles={style}
      data-style={variant}
      {...props}
    >
      <Landmarks.Section>
        <h2>{headerTitle}</h2>
        {!!headerSubtitle && <h3>{headerSubtitle}</h3>}
        {children}
      </Landmarks.Section>
    </Landmarks.Header>
  )
}

export default PageHeader
PageHeader.displayName = 'PageHeader'
PageHeader.styles = defaultStyles
