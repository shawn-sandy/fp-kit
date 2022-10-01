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

import Dropdown from "./dropdown"
export default {
  title: "FPKIT/Components/Dropdowns",
  component: Dropdown,
  argTypes: {
    children: { control: "text" },
    type: {
      control: "select",
      options: ["ComponentName", "submit", "reset"]
    },
    onPointerDown: { action: "down" }
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (
  args
) => (
  <Dropdown {...args}>
    <div>
      {args.children}
    </div>
  </Dropdown>
)

export const DropdownComponent = Template.bind({})
DropdownComponent.args = {
  summary: "Dropdown",
  children: <p>Default Component Name</p>
}
DropdownComponent.play = async ({
  args,
  canvasElement
}) => {
  const { getByRole } = within(canvasElement)
  // const ComponentName = getByRole("note")
  // expect(ComponentName).toHaveAccessibleName("ComponentName Test")
}
