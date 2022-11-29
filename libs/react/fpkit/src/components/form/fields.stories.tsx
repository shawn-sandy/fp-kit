import React from "react"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"
import { BADGE } from "@geometricpanda/storybook-addon-badges"

import {
  within,
  userEvent,
  waitFor
} from "@storybook/testing-library"
import { expect } from "@storybook/jest"

import {Field} from "./fileds"
export default {
  title: "FP.React Components/Form/Fields",
  component: Field,
  argTypes: {
    children: { control: "text" },
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
        component: "Wrapper for form fields",
      },
    }
  }
} as ComponentMeta<typeof Field>

const Template: ComponentStory<typeof Field> = (args) => (
  <Field {...args}>{args.children}</Field>
)
/**
 *
 */
export const FieldWrapper = Template.bind({})
FieldWrapper.args = {
  labelFor: "name",
  children: "Default Field",
}

FieldWrapper.play = async ({ args, canvasElement }) => {
  const { getByLabelText } = within(canvasElement)
  const Field = getByLabelText("args.labelFor")
  expect(Field).toBeInTheDocument()
}

FieldWrapper.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
}
