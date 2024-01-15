import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Form from './form'

const meta: Meta<typeof Form> = {
  title: 'FP.REACT Forms/Components',
  component: Form,
  parameters: {
    docs: {
      description: {
        component: 'Form description here...',
      },
    },
  },
  args: {
    children: 'Link',
  },
} as Story

export default meta
type Story = StoryObj<typeof Form>

export const FormComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
} as Story
