import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Input from './inputs'
import './form.scss'

const meta: Meta<typeof Input> = {
  title: 'FP.REACT Components/Form',
  component: Input,
  args: {},
} as Story

export default meta
type Story = StoryObj<typeof Input>

export const InputComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('textbox')).toBeInTheDocument()
  },
}

export const EmailInput: Story = {
  args: {
    type: 'email',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')

    await userEvent.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  },
} as Story

export const PasswordInput: Story = {
  args: {
    type: 'password',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'password')

    await userEvent.type(input, 'password')
    expect(input).toHaveValue('password')
  },
} as Story

export const SearchInput: Story = {
  args: {
    type: 'search',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'search')

    await userEvent.type(input, 'search term')
    expect(input).toHaveValue('search term')
  },
} as Story
