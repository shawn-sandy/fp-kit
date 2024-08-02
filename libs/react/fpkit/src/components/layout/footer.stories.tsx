import { StoryObj, Meta } from '@storybook/react'
/**
 * Import testing library dependencies
 */
import { within, userEvent } from '@storybook/test'

/**
 * Import jest matchers
 */


import { Footer } from './landmarks'

const meta: Meta<typeof Footer> = {
  title: 'FP.React Components/Layout/Landmarks',
  component: Footer,
  args: {
    children: 'Main Landmark',
    // @ts-ignore
    'data-testid': 'main',
  },
} as Meta

const mainChildren = () => (
  <>
    <h2>Header Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, unde?</p>
  </>
)

export default meta
type Story = StoryObj<typeof Footer>

export const BasicFooter: Story = {}
