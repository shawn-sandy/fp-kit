import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen, expect }  from '@storybook/test'


import Select from './select'
import React from 'react'
const meta: Meta<typeof Select> = {
  title: 'FP.REACT Forms/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Select description here...',
      },
    },
  },
  args: {
    // @ts-ignore
    children: (
      <>
        <Select.Option selectValue="value" selectLabel="Option 1" />
        <Select.Option selectValue="value" selectLabel="Option 2" />
        <Select.Option selectValue="value" selectLabel="Option 3" />
      </>
    ),
  },
} as Story

export default meta
type Story = StoryObj<typeof Select>

export const SelectComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('combobox')).toBeInTheDocument()
  },
}
