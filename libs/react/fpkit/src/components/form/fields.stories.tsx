import React from 'react'

import { StoryObj, Meta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Field } from './fields'
import { Input } from './inputs'
export default {
  title: 'FP.React Components/Form/Fields',
  component: Field,
  subcomponent: { Input },
  argTypes: {
    children: { control: 'text' },
    // type: {
    //   control: "select",
    //   options: ["Field", "submit", "reset"]
    // },
    // onPointerDown: { action: 'down' }
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: 'Wrapper for form fields',
      },
    },
  },
} as Meta<typeof Field>

const Template: StoryObj<typeof Field> = (args) => (
  <Field {...args}>{args.children}</Field>
)

export const FieldWrapper = {
  render: Template,

  args: {
    labelFor: 'name',
    label: 'Field Label',
    children: <Input type="text" id="name" placeholder="Placeholder" />,
  },

  play: async ({ args, canvasElement }) => {
    const { getByLabelText } = within(canvasElement)
    const Field = getByLabelText(/field label/i)
    expect(Field).toBeInTheDocument()
  },

  parameters: {
    docs: {
      description: {
        story: 'Some story **markdown**',
      },
    },
  },
}
