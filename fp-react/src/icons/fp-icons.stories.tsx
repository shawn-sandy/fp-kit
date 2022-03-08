import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import FpIcon from "./fp-icons"

export default {
  title: "Elements/Media/Icons",
  component: FpIcon,
  parameters: {
    layout: "centered",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof FpIcon>

const ComponentTemplate: ComponentStory<typeof FpIcon> = (
  args
) => <FpIcon {...args} />

export const FPIcons = ComponentTemplate.bind({})

FPIcons.args = {
  title: "The title of the Icon(s)",
  fill: "currentColor",
  size: "48",
  children: (
    <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
  )
}

export const Arrow = ComponentTemplate.bind({})

Arrow.args = {
  title: "Got to next page",
  fill: "currentColor",
  children: (
    <>
      {" "}
      <path
        d="M319.91 292H24a24 24 0 0 1-24-24v-24a24 24 0 0 1 24-24h295.91l35.66 36z"
        opacity=".4"
      ></path>
      <path d="M305.44 103.05L441 238.54l.06.06a25.23 25.23 0 0 1 0 34.84l-.06.06L305.44 409a24 24 0 0 1-33.94 0l-17-17a24 24 0 0 1 0-33.94L355.57 256 254.5 154a24 24 0 0 1 0-33.94l17-17a24 24 0 0 1 33.94-.01z"></path>
    </>
  )
}

export const Arrow48 = ComponentTemplate.bind({})

Arrow48.args = {
  title: "Got to next page",
  fill: "green",
  size: "48",
  children: (
    <>
      {" "}
      <path
        d="M319.91 292H24a24 24 0 0 1-24-24v-24a24 24 0 0 1 24-24h295.91l35.66 36z"
        opacity=".4"
      ></path>
      <path d="M305.44 103.05L441 238.54l.06.06a25.23 25.23 0 0 1 0 34.84l-.06.06L305.44 409a24 24 0 0 1-33.94 0l-17-17a24 24 0 0 1 0-33.94L355.57 256 254.5 154a24 24 0 0 1 0-33.94l17-17a24 24 0 0 1 33.94-.01z"></path>
    </>
  )
}

export const Comment = ComponentTemplate.bind({})

Comment.args = {
  title: "Got to next page",
  fill: "lightgray",
  size: "64",
  children: (
    <>
      <path
        d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zM128 240a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
        opacity=".4"
      ></path>
      <path d="M384 176a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm-128 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm-128 0a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"></path>
    </>
  )
}

export const Close = ComponentTemplate.bind({})

Close.args = {
  title: "Close window",
  fill: "currentColor",
  size: "24",
  children: (
    <path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
  )
}
