import type { Meta, StoryObj } from '@storybook/react'

import { within, userEvent } from '@storybook/testing-library'

import { expect } from '@storybook/jest'
/**
 * import component(s)
 */
import { Button } from './button'

/**
 * Set component meta data
 */
const meta: Meta<typeof Button> = {
  title: 'FP.React Components/Buttons',
  component: Button,
}

/**
 * Export meta object
 */
export default meta
type Story = StoryObj<typeof Button>

/**
 * Add object with test prop values
 */
const buttonProps = {
  children: 'Default Button',
  type: 'button',
}

export const AdvButton: Story = {
  args: {
    // @ts-ignore
    children: buttonProps.children,
    type: buttonProps.type,
    onPointerDown: { action: 'down' },
    onPointerLeave: { action: 'leave' },
    onPointerOver: { action: 'over' },
  },
}

/**
 * extend Advbutton story args
 * (AdvButton.args)
 */
export const ButtonInteractions: Story = {
  ...AdvButton,
  // add play params/object to interact with component
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAccessibleName(buttonProps.children)
    expect(button).toHaveAttribute('type', buttonProps.type)
    await userEvent.click(button)
  },
}
