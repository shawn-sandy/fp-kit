import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Heading from './heading'

const meta: Meta<typeof Heading> = {
  title: 'FP.REACT Components/Heading',
  component: Heading,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: 'Heading description here...',
      },
    },
  },
  args: {
    // @ts-ignore
    children: 'Default title',
  },
} as Story

export default meta
type Story = StoryObj<typeof Heading>

export const TitleComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/default title/i)).toBeInTheDocument()
  },
}

export const TitleOne: Story = {
  args: {
    type: 'h1',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/default title/i)).toBeInTheDocument()
  },
} as Story
