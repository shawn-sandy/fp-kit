import * as React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '#components/buttons/button'
import { Icon } from './icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'FP.React Components/Icons',
  args: {
    styles: Icon.styles,
  },
  decorators: [
    (Story) => (
      <section style={{ minWidth: '60vw' }}>
        <Story />
      </section>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Icon>

export const IconSet = {
  args: {},
  render: (...args: any) => {
    return (
      <Icon styles={Icon.styles}>
        <Icon.Code />
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
}

export const Home: Story = {
  args: {
    styles: Icon.styles,
    children: (
      <>
        <Icon.Home size={16} />
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

export const ArrowUp: Story = {
  args: {
    children: <Icon.ArrowUp />,
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

export const Up: Story = {
  args: {
    children: <Icon.Up />,
  },
}

export const Down: Story = {
  args: {
    children: <Icon.Down />,
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

export const Star: Story = {
  args: {
    children: <Icon.Star />,
  },
}

export const Copy: Story = {
  args: {
    children: <Icon.Copy />,
  },
}
