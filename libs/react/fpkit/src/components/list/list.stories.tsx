import { StoryObj, Meta } from '@storybook/react'

import { within, userEvent } from '@storybook/testing-library'

import { expect } from '@storybook/jest'

import List from './list'

const meta: Meta<typeof List> = {
  title: 'FP.React Components/List',
  component: List,
}

const listElm = (
  <>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </>
)

export default meta
type Story = StoryObj<typeof List>

export const DefaultList: Story = {
  args: {
    children: listElm,
  },
}

export const UnstyledList: Story = {
  args: {
    ...DefaultList.args,
    // @ts-ignore
    'data-variant': 'unstyled',
  },
}
