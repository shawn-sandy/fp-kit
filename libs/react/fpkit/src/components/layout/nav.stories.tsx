import { StoryObj, Meta } from '@storybook/react'

import { within, userEvent } from '@storybook/testing-library'

import { expect } from '@storybook/jest'

import Nav from './nav'

const meta: Meta<typeof Nav> = {
  title: 'FP.React Components/Layout/Nav',
  component: Nav,
}

export default meta
type Story = StoryObj<typeof Nav>

export const Navbar: Story = {
  args: {},
}
