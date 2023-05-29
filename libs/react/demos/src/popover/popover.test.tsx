/* eslint-disable react/react-in-jsx-scope */
import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
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
    fireEvent.click(button)
    await (() => {
      expect(screen.getByText('This is a popover.')).toBeDefined()
    })
    fireEvent.click(document.body)
    await (() => {
      expect(screen.getByText('This is a popover.')).not.toBeDefined()
    })
  })
})
