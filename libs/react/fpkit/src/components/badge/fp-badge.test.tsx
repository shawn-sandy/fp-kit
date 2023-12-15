import React from 'react'
import { render, screen } from '@testing-library/react'
import { Badge } from './fp-badge'

describe('Badge', () => {
  it('renders with default styles', () => {
    const { getByText, getByRole } = render(
      <Badge role="note" styles={Badge.styles}>
        Hello World
      </Badge>,
    )
    const badge = getByText('Hello World')
    expect(badge).toBeInTheDocument()
    const badgeRole = getByRole('note')
    expect(badgeRole).toBeInTheDocument()
    expect(badge).toHaveStyle(Badge.styles)
    screen.logTestingPlaygroundURL()
    screen.debug(badge)
  })

  it('renders with custom styles', () => {
    const styles = { ...Badge.styles, backgroundColor: '#000', color: '#fff' }
    const { getByText } = render(<Badge role="note">Danger Zone</Badge>)
    const badge = screen.getByRole('note')
    expect(badge).toHaveStyle(styles)
  })

  it('renders with custom element type', () => {
    const { getByRole } = render(
      <Badge elm="p" role="status">
        Click Me
      </Badge>,
    )
    const badge = getByRole('status')
    expect(badge.tagName).toBe('P')
  })
})
