import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Popover from './popover'

describe('Popover', () => {
  it('should show popover on button click', () => {
    const { getByText } = render(<Popover />)
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(getByText('This is a popover.')).toBeInTheDocument()
  })

  it('should hide popover on outside click', () => {
    const { getByText } = render(<Popover />)
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(getByText('This is a popover.')).toBeInTheDocument()
    fireEvent.click(document.body)
    expect(getByText('This is a popover.')).not.toBeInTheDocument()
  })
})
