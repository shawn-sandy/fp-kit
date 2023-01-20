import { StoryObj, Meta } from '@storybook/react'
/**
 * Import testing library dependencies
 */
import { within, userEvent } from '@storybook/testing-library'

/**
 * Import jest matchers
 */
import { expect } from '@storybook/jest'

import { Footer } from './landmarks'

const meta: Meta<typeof Footer> = {
  title: 'FP.React Components/Layout/Landmarks',
  component: Footer,
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
type Story = StoryObj<typeof Footer>

export const BasicFooter: Story = {}
