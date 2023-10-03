import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Dropdown } from './dropdown'
import jest from 'jest-mock'
import { userEvent } from '@storybook/testing-library'

describe('Dropdown', () => {
  const title = 'Test Dropdown'
  const summary = <div>Test Summary</div>
  const content = <div>Test Content</div>
  const toggle = jest.fn()

  it('renders the summary and content', () => {
    render(
      <Dropdown title={title} summary={summary}>
        {content}
      </Dropdown>,
    )

    expect(screen.getByText('Test Summary')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('calls the toggle function when summary is clicked', async () => {
    render(
      <Dropdown title={title} summary={summary} toggle={toggle}>
        {content}
      </Dropdown>,
    )

    await userEvent.click(screen.getByText('Test Summary'))
    expect(toggle).toHaveBeenCalled()
  })
})
