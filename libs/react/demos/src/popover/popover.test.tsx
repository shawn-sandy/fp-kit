/* eslint-disable react/react-in-jsx-scope */
import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Popover from './popover'

describe('Popover', () => {
  it('should show popover on button click', async () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const component = render(<Popover />)
    const button = screen.getByText('Click me')
    fireEvent.mouseOver(button)
    expect(screen.getByText('This is a popover.')).toBeDefined()
    expect(component).toMatchSnapshot()
  })

  it('should hide popover on outside click', async () => {
    const component = render(<Popover />)
    const button = screen.getByText('Click me')
    fireEvent.mouseOver(button)

    expect(screen.getByText('This is a popover.')).toBeDefined()

    const container = screen.getByTestId('popover')

    fireEvent.mouseOut(container)
    expect(screen.queryByText('This is a popover.')).toBeNull()
    expect(component).toMatchSnapshot()
  })
})
