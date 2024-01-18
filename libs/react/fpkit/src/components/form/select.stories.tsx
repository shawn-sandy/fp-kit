import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Select from './select'

const meta: Meta<typeof Select> = {
  title: 'FP.REACT Forms/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Select description here...',
      },
    },
  },
  args: {
    // @ts-ignore
    children: 'Link',
  },
} as Story

export default meta
type Story = StoryObj<typeof Select>

export const SelectComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}
