import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

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
