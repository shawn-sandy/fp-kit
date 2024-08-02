import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/test'


import Button from './button'
import './button.scss'

const meta: Meta<typeof Button> = {
  title: 'FP.React Components/Buttons',
  component: Button,
  args: {
    children: 'Click me',
  },
  parameters: {
    // actions: { argTypesRegex: '^on.*' },
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

export default meta
type Story = StoryObj<typeof Button>

export const ButtonComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('button')).toBeInTheDocument()
    await userEvent.tab()
    expect(canvas.getByRole('button')).toHaveFocus()
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
