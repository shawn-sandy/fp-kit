import { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import React from 'react'

import Nav from './nav'

const meta: Meta<typeof Nav> = {
  title: 'FP.REACT Components/Nav',
  component: Nav,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: 'Nav description here...',
      },
    },
  },
  args: {
    children: 'Link',
    id: 'nav',
    classes: 'nav',
    // styles: { backgroundColor: 'blue' },
  },
} as Story

export default meta
type Story = StoryObj<typeof Nav>

export const NavComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}

export const NavSection: Story = {
  args: {
    children: (
      <>
        <Nav.List>
          <Nav.Item>Link 1</Nav.Item>
          <Nav.Item>Link 2</Nav.Item>
        </Nav.List>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Link 1')).toBeInTheDocument()
    expect(canvas.getByText('Link 2')).toBeInTheDocument()
  },
} as Story
