import { Button } from './button'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
// import '@shawnsandy/first-paint/dist/css/components/button.min.css'

import { userEvent, screen, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'FP.React Components/Buttons',
  component: Button,
  args: {
    children: 'Default Button',
    type: 'button',
    styles: Button.styles,
  },
  argTypes: {
    children: { control: 'text' },
    onPointerDown: { action: 'down' },
    onPointerLeave: { action: 'leave' },
    onPointerOver: { action: 'over' },
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: 'A headless button component',
      },
    },
  },
}

export const Default = {}

export const Primary = {
  args: {
    children: 'Primary Button',
    type: 'submit',
  },
  play: async () => {
    // const canvas = within(canvasElement)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveAccessibleName(/primary button/i)
  },
}
