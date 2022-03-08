import React from "react"
import FpFig from "./figure"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import { Caption } from "./img-caption.stories"
import "./img.scss"

export default {
  title: "Elements/Media/Images",
  component: FpFig,
  subcomponents: { Caption },
  parameters: {
    layout: "centered",
    status: {
      type: "beta"
    }
  }
} as ComponentMeta<typeof FpFig>

const ComponentTemplate: ComponentStory<typeof FpFig> = ({
  ...args
}) => <FpFig {...args} />

export const Figure = ComponentTemplate.bind({})
Figure.args = {
  children: (
    <img
      src="https://source.unsplash.com/random?w=800"
      alt=""
    />
  ),
  styles: { "--pic-w": "250px" }
}

export const FigureCaption = ComponentTemplate.bind({})

FigureCaption.args = {
  children: (
    <>
      <img
        src="https://source.unsplash.com/random?w=800"
        alt=""
      />
      <Caption>A Caption for my image</Caption>
    </>
  ),
  styles: { "--pic-w": "250px" }
}

export const ChildElement: React.VFC = ({ ...args }) => (
  <>
    <img
      src="https://source.unsplash.com/random?w=800"
      alt=""
      style={{ width: "450px" }}
    />
    <Caption {...args}>The image caption...</Caption>
  </>
)
