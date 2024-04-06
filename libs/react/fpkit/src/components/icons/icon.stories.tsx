import * as React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '#components/buttons/button'
import { Icon } from './icon'
import Svg from './components/svg'
import './icon.scss'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'FP.React Components/Icons',
  args: {
    // styles: Icon.styles,
  },
  decorators: [
    (Story) => (
      <section style={{ minWidth: '60vw', textAlign: 'center' }}>
        <Story />
      </section>
    ),
  ],
} as Meta

export default meta
type Story = StoryObj<typeof Icon>

export const IconSet = {
  args: {},
  render: (...args: any) => {
    return (
      <Icon>
        <Icon.Code styles={Icon.Code.styles} />
        Code Icon{' '}
      </Icon>
    )
  },
}

export const IconButton = {
  args: {},
  render: (...args: any) => {
    return (
      <>
        <Button type="button">
          <Icon>
            <Icon.Code />
          </Icon>
          Click Me
        </Button>
      </>
    )
  },
}

export const Code: Story = {
  args: {
    children: <Icon.Code role="img" aria-label="code icon" />,
  },
} as Story

export const Home: Story = {
  args: {
    styles: Icon.styles,
    children: (
      <>
        <Icon.Home size={16} />
      </>
    ),
  },
} as Story

export const Add: Story = {
  args: {
    children: <Icon.Add />,
  },
} as Story

export const ArrowDown: Story = {
  args: {
    children: <Icon.ArrowDown />,
  },
} as Story

export const ArrowLeft: Story = {
  args: {
    children: <Icon.ArrowLeft />,
  },
} as Story

export const ArrowRight: Story = {
  args: {
    children: <Icon.ArrowRight />,
  },
} as Story

export const ArrowUp: Story = {
  args: {
    children: <Icon.ArrowUp />,
  },
} as Story

export const Chat: Story = {
  args: {
    children: <Icon.Chat />,
  },
} as Story

export const User: Story = {
  args: {
    children: <Icon.User />,
  },
} as Story

export const Left: Story = {
  args: {
    children: <Icon.Left />,
  },
} as Story

export const Right: Story = {
  args: {
    children: <Icon.Right />,
  },
} as Story

export const Up: Story = {
  args: {
    children: <Icon.Up />,
  },
} as Story

export const Down: Story = {
  args: {
    children: <Icon.Down />,
  },
} as Story

export const Minus: Story = {
  args: {
    children: <Icon.Minus />,
  },
} as Story

export const Remove: Story = {
  args: {
    children: <Icon.Remove />,
  },
} as Story

export const Star: Story = {
  args: {
    children: <Icon.Star />,
  },
} as Story

export const Copy: Story = {
  args: {
    children: <Icon.Copy />,
  },
} as Story
