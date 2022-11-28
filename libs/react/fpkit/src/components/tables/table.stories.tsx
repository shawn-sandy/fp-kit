import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { RenderTable, RenderHead, RenderBody } from './table'
export default {
  title: 'FPKIT Components/Table/TableComponent',
  component: RenderTable,
  subcomponent: { RenderHead, RenderBody },
  argTypes: {
    children: { control: 'text' },
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
        component: 'Component description',
      },
    },
  },
} as ComponentMeta<typeof RenderTable>

const tbodyData = [
  {
    id: '1',
    items: ['John', 'john@email.com', '01/01/2021'],
  },
  {
    id: '2',
    items: ['Sally', 'sally@email.com', '12/24/2020'],
  },
  {
    id: '3',
    items: ['Maria', 'maria@email.com', '12/01/2020'],
  },
]

const Template: ComponentStory<typeof RenderTable> = (args) => (
  <RenderTable {...args}></RenderTable>
)
/**
 *
 */
export const TableComponent = Template.bind({})
TableComponent.args = {
  tblCaption: 'A Simple Table Example',
  tblHead: (
    <>
      <th>Name</th>
      <th>Points</th>
      <th>Name</th>
      <th>Points</th>
    </>
  ),
  tblBody: (
    <>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
    </>
  ),
}

TableComponent.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const tbl = getByRole('table')
  expect(tbl).toBeInTheDocument()
}

TableComponent.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**',
    },
  },
}
