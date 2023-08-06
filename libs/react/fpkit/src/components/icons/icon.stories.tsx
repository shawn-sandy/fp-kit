import * as React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'FP.React Components/Icons',
  args: {
    styles: Icon.styles,
  },
  decorators: [
    (Story) => (
      <section style={{ width: '60vw' }}>
        <Story />
      </section>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Icon>

export const IconComponent: Story = {
  args: {
    children: (
      <>
        <span>
          <Icon.Copy />
        </span>
        <span>Wraps you icons in a Flex container to allow you to edit</span>
      </>
    ),
  },
}

export const IconSet = {
  args: {},
  render: (...args: any) => {
    return (
      <Icon>
        <Icon.Code />
        Code Icon{' '}
      </Icon>
    )
  },
}

export const Code: Story = {
  args: {
    children: <Icon.Code />,
  },
}

export const Home: Story = {
  args: {
    styles: Icon.styles,
    children: (
      <>
        <Icon.Home size="12" /> Home Icon
      </>
    ),
  },
}

export const Add: Story = {
  args: {
    children: <Icon.Add />,
  },
}

export const ArrowDown: Story = {
  args: {
    children: <Icon.ArrowDown />,
  },
}

export const ArrowLeft: Story = {
  args: {
    children: <Icon.ArrowLeft />,
  },
}

export const ArrowRight: Story = {
  args: {
    children: <Icon.ArrowRight />,
  },
}

export const Chat: Story = {
  args: {
    children: <Icon.Chat />,
  },
}

export const User: Story = {
  args: {
    children: <Icon.User />,
  },
}

export const Left: Story = {
  args: {
    children: <Icon.Left />,
  },
}

export const Right: Story = {
  args: {
    children: <Icon.Right />,
  },
}

export const Minus: Story = {
  args: {
    children: <Icon.Minus />,
  },
}

export const Remove: Story = {
  args: {
    children: <Icon.Remove />,
  },
}

export const Copy: Story = {
  args: {
    children: <Icon.Copy />,
  },
}
