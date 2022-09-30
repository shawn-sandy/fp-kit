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

import Button, { defStyles } from "./button"

export default {
  title: "FPKIT/Components/Buttons",
  component: Button,
  argTypes: {
    children: { control: "text" },
    type: {
      control: "select",
      options: ["button", "submit", "reset"]
    },
    disabled: { control: "boolean", defaultValue: null },
    defaultStyles: {
      control: "boolean",
      defaultValue: true
    },
    onPointerDown: { action: 'down' },
    onPointerLeave: { action: 'leave' },
    onPointerOver: { action: 'over' }
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
)

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: "Default Button",
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: "Default Button",
  disabled: true,
  onPointerDown: () => console.log("Clicked Default Button")
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  children: "Click Me",
  onPointerDown: () => alert("You Clicked Me?")
}
export const ButtonStyles = Template.bind({})
ButtonStyles.args = {
  children: "Button Styles",
  styles: { color: "white", backgroundColor: "black" },
  onPointerDown: () => alert("Clicked Button Styles")
}

/**
 * Create a pill styled button
 * set the --btn-radius to 99rem
 */
export const PillStyle = Template.bind({})
PillStyle.args = {
  children: "Pill Button",
  styles: { "--btn-radius": "99rem" },
  onPointerDown: () => alert("Clicked Pill")
}

/**
 * Create and unStyled button
 * set the defaultStyles to false
 */
export const UnStyled = Template.bind({})
UnStyled.args = {
  children: "UnStyled Button",
  defaultStyles: false,
  onPointerDown: () => alert("Clicked UnStyled")
}

let clicked: boolean = false

UnStyled.play = async ({ canvasElement }) => {
  const button = within(canvasElement).getByRole("button")

  expect(button).toHaveAccessibleName("UnStyled Button")
  expect(button).not.toHaveAttribute("style")
}

export const ButtonInteractions = Template.bind({})

ButtonInteractions.args = {
  children: "Button Interaction",
  type: "button",
  onPointerDown: () => {
    clicked = true
  }
}

ButtonInteractions.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const button = getByRole("button")
  expect(button).toHaveAccessibleName("Button Interaction")
  expect(button).toHaveAttribute("type", "button")
  expect(button).toHaveAttribute("style")
  expect(clicked).toBeFalsy()
  clicked = false
  userEvent.click(button )
  await waitFor(() => expect(clicked).toBeTruthy())
}
