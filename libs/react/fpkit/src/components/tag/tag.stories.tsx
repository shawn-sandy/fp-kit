import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Tag from './tag'
import './tag.scss'

const meta: Meta<typeof Tag> = {
  title: 'FP.React Components/Tag',
  component: Tag,
  args: {
    // @ts-ignore
    children: 'Basic Tag',
    // styles: Tag.styles,
  },
} as Meta

export default meta
type Story = StoryObj<typeof Tag>

export const TagComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.queryByText(/basic badge/i)).toBeInTheDocument()
  },
}

export const Beta: Story = {
  args: {
    'data-tag': 'beta',
  },
} as Story

export const Production: Story = {
  args: {
    'data-tag': 'production',
  },
} as Story
