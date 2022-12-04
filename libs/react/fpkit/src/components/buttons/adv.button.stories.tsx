import type { Meta, StoryObj } from '@storybook/react'

import { within, userEvent } from '@storybook/testing-library'

import { expect } from '@storybook/jest'
/**
 * import component(s)
 */
import { Button } from './button'

/**
 * Add object with test prop values
 */
const buttonProps = {
  children: 'Default Button',
  type: 'button',
}

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

export const AdvButton: Story = {
  args: {
    // @ts-ignore
    children: buttonProps.children,
    type: buttonProps.type,
  }
}

/**
 * create story with inherited story args
 * (AdvButton.args)
 */
export const ButtonInteractions: Story = {

  args: {...AdvButton.args},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAccessibleName(buttonProps.children)
    expect(button).toHaveAttribute('type', buttonProps.type)
  },
}
