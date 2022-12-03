import React from "react"
import '@shawnsandy/first-paint/dist/css/components/select.min.css'

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

import {Select }from "./select"
export default {
  title: "FP.React Components/Form/Inputs",
  component: Select,
  argTypes: {
    children: { control: "text" },
    // type: {
    //   control: "select",
    //   options: ["ComponentName", "submit", "reset"]
    // },
    onChange: { action: 'Change' }
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: "Input component",
      },
    }
  }
} as ComponentMeta<typeof Select>

const options = (
  <>
  <option value="1">Apples</option>
  <option value="2">Bananas</option>
  <option value="3">Grapes</option>
  <option value="4">Oranges</option>
  </>
)

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>{args.children}</Select>
)

export const SelectInput = Template.bind({})
SelectInput.args = {
  children: options,
}

SelectInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole("combobox")
  expect(ComponentName).toBeInTheDocument()
}

SelectInput.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
}