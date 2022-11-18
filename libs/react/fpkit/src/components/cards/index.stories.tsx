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

import Card from "./card"
export default {
  title: "FPKIT Components/Cards",
  component: Card,
  argTypes: {
    children: { control: "text" },
    type: {
      control: "select",
      options: ["Card", "submit", "reset"]
    },
    onPointerDown: { action: 'down' }
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>{args.children}</Card>
)

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit maiores dignissimos quod dolorem atque laborum aperiam quam eligendi sequi, dolorum iure nam ratione, aliquam ea ullam dicta totam magni.",
}
DefaultCard.play = async ({ args, canvasElement }) => {
  const { getByText } = within(canvasElement)
  const Card = getByText(/lorem/i)
  expect(Card).toBeInTheDocument()
  expect(Card).toHaveAttribute("style")
}

