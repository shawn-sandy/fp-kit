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
      <div style={{ width: '60vw' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Icon>

export const Icons: Story = {
  args: {
    children: (
      <>
        <p>
          Place icons here using the children prop <Icon.Code />
        </p>
      </>
    ),
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

export const Chat: Story = {
  args: {
    children: <Icon.Chat />,
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

export const IconSet = {
  args: {},
  render: (...args: any) => {
    return (
      <>
        <div>
          <Icon.Code />
          Code Icon{' '}
        </div>
      </>
    )
  },
}
