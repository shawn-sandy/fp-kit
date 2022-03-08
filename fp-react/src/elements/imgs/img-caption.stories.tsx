import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import { FpCaption } from "./figure"

export default {
  title: "Elements/Media/Images",
  component: FpCaption,
  parameters: {
    layout: "centered",
    status: {
      type: "beta"
    }
  }
} as ComponentMeta<typeof FpCaption>

const ComponentTemplate: ComponentStory<
  typeof FpCaption
> = (args) => <FpCaption {...args} />

export const Caption = ComponentTemplate.bind({})

Caption.args = {
  children: "You can add a caption to an image"
}
