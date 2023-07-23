import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './button'
import jest from 'jest-mock'

describe('Button', () => {
  it('renders a button element with the correct label', () => {
    const { getByText } = render(<Button type="button">Click me</Button>)
    const button = getByText('Click me')
    expect(button.tagName).toBe('BUTTON')
  })

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button type="button" onClick={handleClick}>
        Click me
      </Button>,
    )
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom styles when provided', () => {
    const { getByText } = render(
      <Button type="button" styles={{ backgroundColor: 'red' }}>
        Click me
      </Button>,
    )
    const button = screen.getByRole('button')
    screen.debug(button)
    expect(button).toHaveAttribute('style')
  })
})
