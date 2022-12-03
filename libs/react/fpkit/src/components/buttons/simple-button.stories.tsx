import { Button } from "./button"
import { BADGE } from "@geometricpanda/storybook-addon-badges"

import {
  userEvent,
  screen,
  waitFor
} from "@storybook/testing-library"
import { expect } from "@storybook/jest"

export default {
  title: "FP.React Components/Buttons",
  component: Button,
  args: {
    children: "Default Button",
    type: "button",
  },
  argTypes: {
    children: { control: "text" },
    onPointerDown: { action: "down" },
    onPointerLeave: { action: "leave" },
    onPointerOver: { action: "over" }
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: "A headless button component"
      }
    }
  }

}

export const Default = {}
export const Primary = {
  args: {
    children: "Primary Button",
    type: "submit",
  },
  play: async ( args: any ) => {
    // const canvas = within(canvasElement)
  const button = screen.getByRole("button")
    userEvent.click(button)
    await waitFor(() => {
      expect(button).toBeInTheDocument()
      expect(button).toHaveAccessibleName(args.children)
    })
  }
}
