import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Badge from './badge'
import './badge.scss'

const meta: Meta<typeof Badge> = {
  title: 'FP.REACT Components/Badge',
  component: Badge,
  args: {
    // @ts-ignore
    children: 'Link',
  },
} as Story

export default meta
type Story = StoryObj<typeof Badge>

export const BadgeComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}

export const CustomBadge: Story = {
  args: {
    children: 'Custom',
  },
  render: ({ ...args }) => {
    return (
      <p>
        Custom
        <Badge aria-label="badge">21</Badge>
      </p>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/custom/i)).toBeInTheDocument()
  },
} as Story

export const RoundedBadge: Story = {
  render: ({ ...args }) => {
    return (
      <p>
        Custom<Badge data-badge="rounded">21</Badge>
      </p>
    )
  },
} as Story
