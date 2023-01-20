import { StoryObj, Meta } from '@storybook/react'
/**
 * Import testing library dependencies
 */
import { within, userEvent } from '@storybook/testing-library'

/**
 * Import jest matchers
 */
import { expect } from '@storybook/jest'

import { Header } from './landmarks'

const meta: Meta<typeof Header> = {
  title: 'FP.React Components/Layout/Landmarks',
  component: Header,
  args: {
    // @ts-ignore
    children: 'Default Header',
    'data-testid': 'banner'
  },
}

const headerChildren = () => (
  <>
    <h2>Header Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, unde?</p>
  </>
)

export default meta
type Story = StoryObj<typeof Header>

export const LandmarkDefault: Story = {}

export const HeaderWithChildren: Story = {
  args: {
    // @ts-ignore
    children: headerChildren()
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const header = canvas.getByRole('banner')
    expect(header).toBeInTheDocument()
    const title = canvas.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/header title/i)
  }
}
