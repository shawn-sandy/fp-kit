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

import Img from "./img"
export default {
  title: "FPKIT Components/Image",
  component: Img,
  argTypes: {
    children: { control: "text" },
    type: {
      control: "select",
      options: ["Image", "submit", "reset"]
    },
    onPointerDown: { action: 'down' }
  },
  parameters: {
    // docs: {
    //   description: {
    //     component: 'Image component'
    //   }
    // },
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof Img>

const Template: ComponentStory<typeof Img> = (args) => (
  <Img {...args} />
)

export const DefaultImage = Template.bind({})
DefaultImage.args = {
  src: "https://picsum.photos/200/300",
  height: 300,
  width: 200,
  alt: "Img Component",
}

DefaultImage.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const Image = getByRole("img")
  expect(Image).toBeInTheDocument()
  expect(Image).toHaveAttribute("src", args.src)
  expect(Image).toHaveAttribute("alt", args.alt)
  expect(Image).toHaveAttribute("width")
  expect(Image).toHaveAttribute("height")
}

export const ImageError = Template.bind({})
ImageError.args = {
  src: "",
  height: 300,
  width: 200,
  alt: "Img Broken",
  placeholder: "https://via.placeholder.com/300?text=Image+Error"
}

ImageError.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const Image = getByRole("img")
  expect(Image).toBeInTheDocument()
  expect(Image).toHaveAttribute("src", "")
  expect(Image).toHaveAttribute("alt", args.alt)
  expect(Image).toHaveAttribute("width")
  expect(Image).toHaveAttribute("height")
}
