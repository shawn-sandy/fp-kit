import React from 'react'

import { StoryObj, Meta } from '@storybook/react'

import { within, userEvent } from '@storybook/testing-library'

import { expect } from '@storybook/jest'

import List from './list'

const meta: Meta<typeof List> = {
  title: 'FP.React Components/List',
  component: List,
} as Meta

const listElm = (
  <>
    <List.ListItem>Home</List.ListItem>
    <List.ListItem>About</List.ListItem>
    <List.ListItem>Contact</List.ListItem>
  </>
)

export default meta
type Story = StoryObj<typeof List>

export const DefaultList: Story = {
  args: {
    children: listElm,
  },
} as Story

export const UnstyledList: Story = {
  args: {
    ...DefaultList.args,
    role: 'list',
  },
  parameters: {
    docs: {
      description: {
        story: 'Another description `on the story`, with some markdown',
      },
    },
  },
} as Story

export const InlineList: Story = {
  args: {
    ...UnstyledList.args,
    'data-list': 'inline',
  },
} as Story
