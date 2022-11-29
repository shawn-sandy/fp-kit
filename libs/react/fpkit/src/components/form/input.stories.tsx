import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import '@shawnsandy/first-paint/dist/css/components/input.min.css'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Input } from './inputs'
export default {
  title: 'FP.React Components/FormInputs',
  component: Input,
  argTypes: {
    children: { control: 'text' },
    // type: {
    //   control: "select",
    //   options: ["ComponentName", "submit", "reset"]
    // },
    // onPointerDown: { action: 'down' }
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

const Template: ComponentStory<typeof Input> = (args) => (
  <section style={{ minWidth: '80vw'}}>
    <Input {...args} />
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
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole('textbox')
  expect(ComponentName).toBeInTheDocument()
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
  const { getByRole } = within(canvasElement)
  // const ComponentName = getByRole('textbox')
  // expect(ComponentName).toBeInTheDocument()
}

PasswordInput.parameters = {
  docs: {
    description: {
      story: 'Create a password input',
    },
  }
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  placeholder: 'name@somewhere.com',
}

EmailInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole('textbox')
  expect(ComponentName).toBeInTheDocument()
}

EmailInput.parameters = {
  docs: {
    description: {
      story: 'Create a email input',
    },
  }
}

export const SearchInput = Template.bind({})
SearchInput.args = {
  type: 'search',
  placeholder: 'Search the site',
}

SearchInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole('searchbox')
  expect(ComponentName).toBeInTheDocument()
}

SearchInput.parameters = {
  docs: {
    description: {
      story: 'Create a search input',
    },
  }
}
