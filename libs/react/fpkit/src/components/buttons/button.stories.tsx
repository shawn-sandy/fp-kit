import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Button from './button'

const meta: Meta<typeof Button> = {
  title: 'FP.React Components/Buttons',
  component: Button,
  args: {
    children: 'Link',
  },
} as Meta

export default meta
type Story = StoryObj<typeof Button>

export const ButtonComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas).toBeInTheDocument()
  },
} as Story

export const ButtonWithStyles: Story = {
  args: {
    styles: {
      backgroundColor: 'blue',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas).toBeInTheDocument()
    expect(await canvas.findByRole('button')).toHaveStyle(
      'background-color: blue',
    )
  },
} as Story
