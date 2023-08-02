import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'FP.React Components/Icons',
}

export default meta
type Story = StoryObj<typeof Icon>

export const Icons: Story = {
  args: {},
}
