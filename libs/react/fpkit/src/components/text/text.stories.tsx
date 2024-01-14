import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Text from './text'

const meta: Meta<typeof Text> = {
  title: 'FP.REACT Components/Text',
  component: Text,
  args: {
    // @ts-ignore
    children:
      'Exercitation non voluptate fugiat amet dolor tempor consectetur. Eu esse adipisicing laboris duis et velit in quis et sunt pariatur tempor laborum nisi. Et id amet ullamco culpa irure nulla esse dolore velit esse.',
  },
} as Story

export default meta
type Story = StoryObj<typeof Text>

export const ParagraphText: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}

export const span: Story = {
  args: {
    as: 'span',
    children: 'Heading Text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/heading/i)).toBeInTheDocument()
  },
} as Story

export const Blockquote: Story = {
  args: {
    as: 'blockquote',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
} as Story

export const Strong: Story = {
  args: {
    as: 'strong',
    children: 'Emphasis Text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/emphasis/i)).toBeInTheDocument()
  },
} as Story

export const Code: Story = {
  args: {
    as: 'code',
    children: 'Code Text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/code/i)).toBeInTheDocument()
  },
} as Story
