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
  },
  onToggle: { action: "toggle" },
  onOpen: { action: "open" },
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
  summary: "Dropdown Details",
  children: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores omnis blanditiis provident inventore? Laboriosam a quasi in ut quae natus sequi nemo labore recusandae numquam. Nisi quaerat perspiciatis unde fugit.</p>
}
DropdownComponent.play = async ({
  args,
  canvasElement
}) => {
  const { getByRole, getByText } = within(canvasElement)
  const dropdown = getByRole("group")
  expect(dropdown).toBeInTheDocument()
  expect(getByText(/dropdown details/i)).toBeInTheDocument()
}
