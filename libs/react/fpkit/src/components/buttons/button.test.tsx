import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './button'
import user from '@testing-library/user-event'
import jest from 'jest-mock'
import { userEvent } from '@storybook/testing-library'

describe('Button', () => {
  it('renders a button element with the correct label', () => {
    render(<Button type="button">Click me</Button>)
    const button = screen.getByText('Click me')
    expect(button.tagName).toBe('BUTTON')
    screen.logTestingPlaygroundURL()
  })

  it('has the type attribute set to "button" by default', () => {
    render(<Button type="button">Click me</Button>)
    const button = screen.getByText('Click me')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('calls the onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    const handlePointerEvents = jest.fn()
    render(
      <Button type="button" onClick={handleClick}>
        Click me
      </Button>,
    )
    const button = screen.getByText('Click me')
    await userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handlePointerEvents).toHaveBeenCalledTimes(0)
  })

  it('applies custom styles when provided', () => {
    render(
      <Button type="button" styles={{ backgroundColor: 'red' }}>
        Click me
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('style')
  })

  it('calls the onPointerDown handler when pointer is down', async () => {
    const handlePointerDown = jest.fn()
    render(
      <Button type="button" onPointerDown={handlePointerDown}>
        Click me
      </Button>,
    )
    const button = screen.getByText('Click me')
    await userEvent.click(button)
    expect(handlePointerDown).toHaveBeenCalledTimes(1)
  })

  it('calls the onPointerOver handler when pointer is over', async () => {
    const handlePointerOver = jest.fn()
    render(
      <Button type="button" onPointerOver={handlePointerOver}>
        Click me
      </Button>,
    )
    const button = screen.getByText('Click me')
    await userEvent.hover(button)
    expect(handlePointerOver).toHaveBeenCalledTimes(1)
  })

  it('calls the onPointerLeave handler when pointer leaves', async () => {
    const handlePointerEvents = jest.fn()
    render(
      <Button type="button" onPointerLeave={handlePointerEvents}>
        Click me
      </Button>,
    )
    const button = screen.getByText('Click me')
    await userEvent.unhover(button)
    expect(handlePointerEvents).toHaveBeenCalledTimes(1)
  })

  it('it is disabled when disabled is true', () => {
    const handleClick = jest.fn()
    render(
      <Button
        type="button"
        disabled
        onPointerDown={handleClick}
        onPointerOver={handleClick}
        onPointerLeave={handleClick}
      >
        Click me
      </Button>,
    )
    const button = screen.getByText('Click me')
    expect(button).not.toBeDisabled()
    userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(0)
    userEvent.hover(button)
    expect(handleClick).toHaveBeenCalledTimes(0)
    userEvent.unhover(button)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
})
