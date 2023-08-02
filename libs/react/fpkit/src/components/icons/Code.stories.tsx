import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Code } from './code'

const meta: Meta<typeof Code> = {
  component: Code,
  title: 'FP.React Components/Icons',
}

export default meta
type Story = StoryObj<typeof Code>

export const Default: Story = {
  args: {},
}
