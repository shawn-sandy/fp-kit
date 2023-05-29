import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent, getByText } from '@testing-library/react'
import Popover from './popover'

describe('Popover', () => {
  it('should show popover on button click', () => {
    render(<Popover />)
    const button = screen.getByText('Click me')
    fireEvent.click(button)
    expect(screen.getByText('This is a popover.')).toBeInTheDocument()
  })

  it('should hide popover on outside click', () => {
    render(<Popover />)
    const button = screen.getByText('Click me')
    fireEvent.click(button)
    expect(screen.getByText('This is a popover.')).toBeInTheDocument()
    fireEvent.click(document.body)
    expect(screen.getByText('This is a popover.')).not.toBeInTheDocument()
  })
})
