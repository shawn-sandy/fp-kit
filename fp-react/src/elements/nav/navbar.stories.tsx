/** @format */

import React from "react"
import {
  ComponentMeta,
  ComponentStory
} from "@storybook/react"
import Navbar from "./navbar"
import "./navbar.scss"

export default {
  title: "Elements/Nav/Navbar",
  component: Navbar,
  parameters: {
    layout: "padded",
    status: {
      type: "alpha"
    }
  }
} as ComponentMeta<typeof Navbar>

const ComponentTemplate: ComponentStory<typeof Navbar> = (
  args
) => <Navbar {...args} />

export const Nav = ComponentTemplate.bind({})

Nav.args = {
  children: (
    <>
      <ul>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
      <section>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </section>
    </>
  )
}
