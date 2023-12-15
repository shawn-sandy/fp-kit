import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Dropdown from './dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'FP.REACT Components/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1rem',
          width: 'clamp(300px, 700px, 1200px)',
          minHeight: '50vh',
          margin: 'auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'center',
  },
  args: {
    // @ts-ignore
    children: (
      <div>
        Elit exercitation ea reprehenderit cupidatat eu proident esse dolor
        Lorem occaecat. Nulla incididunt culpa Lorem ut Lorem sint deserunt
        minim excepteur labore velit cupidatat non. Ex ea eiusmod voluptate sint
        magna veniam dolor sint irure. Proident excepteur id dolor in eiusmod
        dolore.
      </div>
    ),
  },
} as Story

export default meta
type Story = StoryObj<typeof Dropdown>

export const DropdownComponent: Story = {
  args: {
    summary: <>Summary Title</>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
} as Story
