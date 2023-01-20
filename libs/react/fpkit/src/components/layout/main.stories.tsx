import { StoryObj, Meta } from '@storybook/react'
/**
 * Import testing library dependencies
 */
import { within, userEvent } from '@storybook/testing-library'

/**
 * Import jest matchers
 */
import { expect } from '@storybook/jest'

import { Main } from './landmarks'

const meta: Meta<typeof Main> = {
  title: 'FP.React Components/Layout/Landmarks',
  component: Main,
  args: {
    // @ts-ignore
    children: 'Main Landmark',
    'data-testid': 'main'
  },
}

const mainChildren = () => (
  <>
    <h2>Header Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, unde?</p>
  </>
)

export default meta
type Story = StoryObj<typeof Main>

export const MainLandmark: Story = {}

export const MainWithChildren: Story = {
  args: {
    // @ts-ignore
    children: mainChildren(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const main = canvas.getByRole('main')
    expect(main).toBeInTheDocument()
    const title = canvas.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Header Title')
  },
}
