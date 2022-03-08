/** @format */

import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import { Card } from "./container"

export default {
  title: "Components/Containers",
  component: Card,
  parameters: {
    layout: "centered",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof Card>

const ComponentTemplate: ComponentStory<typeof Card> = (
  args
) => <Card {...args} />

/**
 * Default Card element
 */
export const CardSM = ComponentTemplate.bind({})

CardSM.args = {
  children: (
    <>
      <h3>Card Title</h3>
      <p>
        First paint is a performance-first,
        accessibility-driven, SCSS/CSS micro-framework...
      </p>
    </>
  )
}

export const CardLG = ComponentTemplate.bind({})

CardLG.args = {
  styles: { "--card": "var(--cd-lg)" },
  children: (
    <>
      <h3>Card Title</h3>
      <p>
        First paint is a performance-first,
        accessibility-driven, SCSS/CSS micro-framework...
      </p>
    </>
  )
}

export const CardShadow = ComponentTemplate.bind({})

CardShadow.args = {
  styles: { "--cd-shadow": "var(--cd-shadow-sm)" },
  children: (
    <>
      <h3>Card Title</h3>
      <p>
        First paint is a performance-first,
        accessibility-driven, SCSS/CSS micro-framework...
      </p>
    </>
  )
}
