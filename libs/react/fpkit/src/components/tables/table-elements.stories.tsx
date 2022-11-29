import React from 'react'
import '@shawnsandy/first-paint/dist/css/components/table.min.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Table, Caption, Thead, Tbody, Td, Tr } from './table-elements'
export default {
  title: 'FP.React Components/Table/Elements',
  component: Table,
  subcomponents: { Caption, Thead, Tbody, Tr, Td },
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: 'A collection of elements for creating a responsive table components',
      },
    },
  },
} as ComponentMeta<typeof Table>

const displayTable = () => (
  <>
    <thead>
      <tr>
        <th>Name</th>
        <th>Points</th>
        <th>Name</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
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
      <tr>
        <td>Melissa</td>
        <td>5150</td>
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr>
        <td>Dom</td>
        <td>6000</td>
        <td>Dom</td>
        <td>6000</td>
      </tr>
    </tbody>
  </>
)

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>{args.children}</Table>
)

export const TableElement = Template.bind({})
TableElement.args = {
  children: displayTable(),
}

TableElement.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const Table = getByRole('table')
  expect(Table).toBeInTheDocument()
}

TableElement.parameters = {
  docs: {
    description: {
      story: 'The `table` element is a wrapper that creates a responsive `<section><table>{children}</table></section>`',
    },
  },
}
