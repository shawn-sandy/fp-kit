import React from 'react'

import { StoryObj, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
// import '@shawnsandy/first-paint/dist/css/components/input.min.css'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Input } from './inputs'
export default {
  title: 'FP.React Components/Form/Inputs',
  component: Input,
  argTypes: {
    children: { control: 'text' },
    // type: {
    //   control: "select",
    //   options: ["inputElm", "submit", "reset"]
    // },
    onChange: { action: 'change' },
    onBlur: { action: 'blur' },
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: 'Component description',
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: StoryObj<typeof Input> = (args) => (
  <section style={{ minWidth: '80vw' }}>
    <Input {...args} data-testid="input" />
  </section>
)
/**
 *
 */
export const TextInput = Template.bind({})
TextInput.args = {
  placeholder: 'Placeholder',
}

TextInput.play = async ({ args, canvasElement }) => {
  const { getByRole, getAllByPlaceholderText } = within(canvasElement)
  const inputElm = getByRole('textbox')
  expect(inputElm).toBeInTheDocument()
  expect(inputElm).toHaveAttribute('type')
  expect(inputElm).toHaveAttribute('placeholder', args.placeholder)
  expect(inputElm).toHaveAttribute('type', 'text')
}

TextInput.parameters = {
  docs: {
    description: {
      story: 'Create a text input',
    },
  },
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  type: 'password',
  placeholder: 'Password',
}

PasswordInput.play = async ({ args, canvasElement }) => {
  const { getByTestId } = within(canvasElement)
  const inputElm = getByTestId('input')
  expect(inputElm).toBeInTheDocument()
  expect(inputElm).toHaveAttribute('type', 'password')
}

PasswordInput.parameters = {
  docs: {
    description: {
      story: 'Create a password input',
    },
  },
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  placeholder: 'name@somewhere.com',
}

EmailInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const inputElm = getByRole('textbox')
  expect(inputElm).toBeInTheDocument()
  expect(inputElm).toHaveAttribute('type', 'email')
}

EmailInput.parameters = {
  docs: {
    description: {
      story: 'Create a email input',
    },
  },
}

export const SearchInput = Template.bind({})
SearchInput.args = {
  type: 'search',
  placeholder: 'Search the site',
}

SearchInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const inputElm = getByRole('searchbox')
  expect(inputElm).toBeInTheDocument()
  expect(inputElm).toHaveAttribute('type', 'search')
}

SearchInput.parameters = {
  docs: {
    description: {
      story: 'Create a search input',
    },
  },
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
  disabled: true,
  placeholder: 'Disabled',
}

DisabledInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const inputElm = getByRole('textbox')
  expect(inputElm).toBeInTheDocument()
  expect(inputElm).toHaveAttribute('aria-disabled')
}

DisabledInput.parameters = {
  docs: {
    description: {
      story: 'Create a disabled input',
    },
  },
}

export const ReadonlyInput = Template.bind({})
ReadonlyInput.args = {
  readonly: true,
  placeholder: 'Readonly',
}

ReadonlyInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const inputElm = getByRole('textbox')
  expect(inputElm).toBeInTheDocument()
  expect(inputElm).toHaveAttribute('readonly')
  expect(inputElm).toHaveAttribute('aria-readonly')
}
