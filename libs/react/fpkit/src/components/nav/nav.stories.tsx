import { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import React from 'react'

import Nav from './nav'
import Link from '../link/link'

const meta: Meta<typeof Nav> = {
  title: 'FP.REACT Components/Nav',
  component: Nav,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: 'Nav description here...',
      },
    },
  },
  args: {
    children: (
      <Nav.List>
        <Nav.Item>
          <Link href="/">Link 1</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/">Link 2</Link>
        </Nav.Item>
      </Nav.List>
    ),
    id: 'nav',
    classes: 'nav',
  },
} as Story

export default meta
type Story = StoryObj<typeof Nav>

export const NavComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}

export const NavSection: Story = {
  args: {
    children: (
      <>
        <Nav.List>
          <Nav.Item>Link 1</Nav.Item>
          <Nav.Item>Link 2</Nav.Item>
        </Nav.List>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Link 1')).toBeInTheDocument()
    expect(canvas.getByText('Link 2')).toBeInTheDocument()
  },
} as Story

export const NavBlock: Story = {
  args: {
    ...NavSection.args,
    children: (
      <>
        <Nav.List isBlock={true}>
          <Nav.Item>Link 1</Nav.Item>
          <Nav.Item>Link 2</Nav.Item>
        </Nav.List>
      </>
    ),
  },
} as Story

export const MultipleNavs: Story = {
  args: {
    ...NavSection.args,
    classes: 'navbar',
    children: (
      <>
        <Nav.List>
          <Nav.Item>Link 1</Nav.Item>
          <Nav.Item>Link 2</Nav.Item>
        </Nav.List>
        <Nav.List>
          <Nav.Item>Link 1</Nav.Item>
          <Nav.Item>Link 2</Nav.Item>
        </Nav.List>
      </>
    ),
  },
} as Story
