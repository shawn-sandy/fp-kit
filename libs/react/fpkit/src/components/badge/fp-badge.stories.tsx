import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Badge from './fp-badge'
import './badge.scss'

const meta: Meta<typeof Badge> = {
  title: 'FP.React Components/Badge',
  component: Badge,
  args: {
    // @ts-ignore
    children: 'Basic Badge',
    // styles: Badge.styles,
  },
} as Meta

export default meta
type Story = StoryObj<typeof Badge>

export const BadgeComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.queryByText(/basic badge/i)).toBeInTheDocument()
  },
}

export const Beta: Story = {
  args: {
    'data-badge': 'beta',
  },
} as Story

export const Production: Story = {
  args: {
    'data-badge': 'production',
  },
} as Story
