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

import FPBadge from "./fp-badge"
export default {
  title: "FPKIT/Components/Badge",
  component: FPBadge,
  argTypes: {
    children: { control: "text" },
    role: {
      control: "select",
      options: ["note", "alert", "status"]
    }
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof FPBadge>

const Template: ComponentStory<typeof FPBadge> = (args) => (
  <FPBadge {...args}>{args.children}</FPBadge>
)

export const Badge = Template.bind({})
Badge.args = {
  children: "Badge",
}

export const BadgeInteractions = Template.bind({})

BadgeInteractions.args = {
  children: "Badge",
  role: "note",
}

BadgeInteractions.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const badge = getByRole("note")
   expect(badge).toBeInTheDocument()
   expect(badge).toHaveAttribute("style");
}
