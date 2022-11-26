import React from "react"
import '@shawnsandy/first-paint/dist/css/components/table.min.css'

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

import {Table} from "./table"
export default {
  title: "FPKIT Components/Table",
  component: Table,
  argTypes: {
    children: { control: "text" },
    // type: {
    //   control: "select",
    //   options: ["Table", "submit", "reset"]
    // },
    // onPointerDown: { action: 'down' }
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: "Component description",
      },
    }
  }
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>{args.children}</Table>
)
/**
 *
 */
export const TableComponent = Template.bind({})
TableComponent.args = {
}

TableComponent.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const Table = getByRole("table")
  expect(Table).toBeInTheDocument()
}

TableComponent.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
}
