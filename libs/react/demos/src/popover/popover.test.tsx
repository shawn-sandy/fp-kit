/* eslint-disable react/react-in-jsx-scope */
import { describe, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Popover from './popover'

describe('Popover', () => {
  it('should show popover on button click', async () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const component = render(<Popover />)
    expect(component).toBeDefined()
    const button = screen.getByText('Hover here')
    fireEvent.pointerEnter(button)
    expect(screen.getByText('This is a popover.')).toBeDefined()
    expect(component).toMatchSnapshot()
  })

  it('should hide popover on outside click', async () => {
    const component = render(<Popover />)
    expect(component).toBeDefined()
    const button = screen.getByText('Hover here')
    fireEvent.pointerEnter(button)

    expect(screen.getByText('This is a popover.')).toBeDefined()
    fireEvent.pointerLeave(button)
    expect(screen.queryByText('This is a popover.')).toBeNull()
  })
})
