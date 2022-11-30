import React from "react"
import '@shawnsandy/first-paint/dist/css/components/textarea.min.css'


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

import {Textarea} from "./textarea"
export default {
  title: "FP.React Components/Form/Inputs",
  component: Textarea,
  argTypes: {
    children: { control: "text" },
    // type: {
    //   control: "select",
    //   options: ["ComponentName", "submit", "reset"]
    // },
    // onPointerDown: { action: 'down' }
    onChange: { action: 'change' },
    onBlur: { action: 'blur' }
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: "Component description",
      },
    }
  }
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args}/>
)
/**
 *
 */
export const TextareaInput = Template.bind({})
TextareaInput.args = {
  // children: "Default ComponentName",
}

TextareaInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole("textbox")
  expect(ComponentName).toBeInTheDocument()
}

TextareaInput.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
}
