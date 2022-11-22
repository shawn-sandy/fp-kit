import React from "react"
import '@shawnsandy/first-paint/dist/css/components/badge.min.css'
import { BADGE } from "@geometricpanda/storybook-addon-badges"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

import {
  within,
  userEvent,
  waitFor
} from "@storybook/testing-library"
import { expect } from "@storybook/jest"

import {Badge} from "./fp-badge"
export default {
  title: "FPKIT Components/Badge",
  component: Badge,
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
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>{args.children}</Badge>
)

export const Default = Template.bind({})
Default.args = {
  children: "Badge",
  role: "note"
}

Default.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const badge = getByRole("note")
   expect(badge).toBeInTheDocument()
   expect(badge).toHaveAttribute("style");
}
