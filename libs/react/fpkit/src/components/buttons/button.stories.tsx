import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Button from './button'
import './button.scss'

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

export const Small: Story = {
  args: {
    'data-btn': 'sm',
  },
} as Story

export const Medium: Story = {
  args: {
    'data-btn': 'md',
  },
} as Story

export const Large: Story = {
  args: {
    'data-btn': 'lg',
  },
} as Story

export const Custom: Story = {
  args: {
    styles: {
      '--btn-fs': '2rem',
    },
  },
} as Story
