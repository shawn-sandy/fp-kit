import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"

import Container from "./container"
import "./Container.scss"

export default {
  title: "Components/Containers",
  component: Container,
  parameters: {
    layout: "padded",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = ({
  ...args
}) => (
  <Container
    {...args}
    styles={{ "--box-max-w": "100%" }}
  ></Container>
)

export const ContainerSection = Template.bind({})

ContainerSection.args = {
  children:
    "First paint is a performance-first, accessibility-driven, SCSS/CSS micro-framework..."
}
