import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Input from './inputs'
import './form.scss'

const meta: Meta<typeof Input> = {
  title: 'FP.REACT  Forms/Inputs',
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

//required input story
export const RequiredInput: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Displays a required input `aria-required="true"` on any input type the placeholder displays an `*` at the start of a default placeholder text to indicate it is required',
      },
    },
  },
  args: {
    type: 'text',
    required: true,
    placeholder: 'This Field is required (placeholder)',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toBeRequired()

    await userEvent.type(input, 'test')
    expect(input).toBeValid()

    await userEvent.clear(input)

    userEvent.type(input, '\n')
    expect(input).toBeInvalid()
  },
} as Story

export const DefaultRequired: Story = {
  args: {
    type: 'text',
    required: true,
  },
} as Story

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
    const input = canvas.getByPlaceholderText(/password/i)
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
    const input = canvas.getByRole('searchbox')
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

// URL text input story
export const UrlInput: Story = {
  args: {
    type: 'url',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'url')

    await userEvent.type(input, 'https://example.com')
    expect(input).toHaveValue('https://example.com')
  },
} as Story
