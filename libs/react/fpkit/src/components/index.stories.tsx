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

import FP from "./fp"
export default {
  title: "FPKIT Components/FP",
  component: FP,
  argTypes: {
    children: { control: "text" },
    type: {
      control: "select",
      options: ["FP", "submit", "reset"]
    },
    onPointerDown: { action: 'down' }
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof FP>

const Template: ComponentStory<typeof FP> = (args) => (
  <FP {...args}>{args.children}</FP>
)

export const Default = Template.bind({})
Default.args = {
  children: "FP Kit",
  as: "div",
  styles: {
    backgroundColor: "whitesmoke",
    width: "80vw",
    display: "flex",
    padding: "1rem",
  }
}

Default.play = async ({ args, canvasElement }) => {
  const { getByText } = within(canvasElement)
  const component  = getByText(/fp kit/i)
   expect(component).toBeInTheDocument()
   expect(component).toHaveAttribute("style");
}
