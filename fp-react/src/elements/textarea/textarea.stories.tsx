import React from "react"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"

import Textarea from "./textarea"
import "./textarea.scss"

export default {
  title: "Elements/Textarea/Examples",
  component: Textarea,
  layout: "padded",
  status: {
    type: "alpha"
  }
} as ComponentMeta<typeof Textarea>

export const ExampleDefault: ComponentStory<
  typeof Textarea
> = () => <Textarea />

export const ExampleText: ComponentStory<
  typeof Textarea
> = () => (
  <Textarea styles={ {'--ta-min-h': "260px"} }>
    Quis cillum tempor sit cillum incididunt esse
    adipisicing non voluptate quis sint mollit aliquip.
    Eiusmod adipisicing eiusmod consequat ad ex. Minim Lorem
    deserunt ad veniam id.
  </Textarea>
)
