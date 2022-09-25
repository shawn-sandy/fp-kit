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

import Badge from "./badge"
export default {
  title: "Elements/Badge",
  component: Badge,
  argTypes: {
    children: { control: "text" },
    type: {
      control: "select",
      options: ["Badge", "submit", "reset"]
    }
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>{args.children}</Badge>
)

export const DefaultBadge = Template.bind({})
DefaultBadge.args = {
  children: "Default Badge",
}

export const BadgeInteractions = Template.bind({})

BadgeInteractions.args = {
  children: "Badge Test",
  // type: "Badge",
  onPointerDown: () => {
    // clicked = true
  }
}

BadgeInteractions.play = async ({ args, canvasElement }) => {
  const { getByRole, getByText } = within(canvasElement)
  const Badge = getByText("Badge Test")
  expect(Badge).toBeInTheDocument()
}
