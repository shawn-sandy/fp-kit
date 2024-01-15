import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Input from './inputs'
import './form.scss'

const meta: Meta<typeof Input> = {
  title: 'FP.REACT Components/Form',
  component: Input,
  args: {},
  parameters: {
    docs: {
      description: {
        component:
          'Use the `<Input type="***"/>` component to render an any input element -- text, email, number etc. Pass props like `name`, `value`, `placeholder` etc to control the input.',
      },
    },
  },
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

export const InputDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Displays a disabled input `aria-disabled="true"` on any input type',
      },
    },
  },
  args: {
    type: 'text',
    isDisabled: true,
  },
} as Story

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

export const TelInput: Story = {
  args: {
    type: 'tel',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'tel')

    await userEvent.type(input, '1234567890')
    expect(input).toHaveValue('1234567890')
  },
} as Story
