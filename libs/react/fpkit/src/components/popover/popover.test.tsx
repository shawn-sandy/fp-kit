import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Popover from './popover'
import userEvent from '@testing-library/user-event'

describe('Popover', () => {
  it('renders the popover content when the trigger element is hovered', async () => {
    render(
      <Popover popoverTrigger={<button>Hover here</button>}>
        Popover content
      </Popover>,
    )

    const triggerElement = screen.getByRole('button', {
      name: /hover here/i,
    })
    userEvent.hover(triggerElement)
    expect(await screen.findByText('Popover content')).toBeInTheDocument()
  })

  it('hides the popover content when the trigger element is no longer hovered', () => {
    render(
      <Popover popoverTrigger={<button>Hover here</button>}>
        Popover content
      </Popover>,
    )

    const triggerElement = screen.getByRole('button', {
      name: /hover here/i,
    })
    fireEvent.pointerEnter(triggerElement)

    const popoverContent = screen.getByText('Popover content')
    expect(popoverContent).toBeInTheDocument()

    fireEvent.pointerLeave(triggerElement)
    expect(popoverContent).not.toBeInTheDocument()
  })
})
