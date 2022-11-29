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
  <Input {...args} />
)
/**
 *
 */
export const DefaultComponentName = Template.bind({})
DefaultComponentName.args = {
  placeholder: 'Default ComponentName',
}

DefaultComponentName.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole('input')
  expect(ComponentName).toBeInTheDocument()
}

DefaultComponentName.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
}
