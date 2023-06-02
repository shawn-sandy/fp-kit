/* eslint-disable react/react-in-jsx-scope */
import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Popover from './popover'

describe('Popover', () => {
  it('should show popover on button click', async () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Popover />)
    const button = screen.getByText('Click me')
    fireEvent.click(button)
    await (() => {
      expect(screen.getByText('This is a popover.')).toBeDefined()
    })
  })

  it('should hide popover on outside click', async () => {
    render(<Popover />)
    const button = screen.getByText('Click me')
    fireEvent.mouseOver(button)

    await expect(screen.getByText('This is a popover.')).toBeDefined()

    const container = screen.getByTestId('popover')

    fireEvent.mouseOut(container)
    await expect(screen.queryByText('This is a popover.')).toBeNull()
  })
})
