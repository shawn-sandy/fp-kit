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

import Img from '#components/images/img'

const meta: Meta<typeof Header> = {
  title: 'FP.React Components/Layout/Landmarks',
  component: Header,
  args: {
    children: 'Default Header',
    // @ts-ignore
    'data-testid': 'banner',
  },
} as Meta

const headerChildren = () => (
  <>
    <h2>Header Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, unde?</p>
  </>
)

export default meta
type Story = StoryObj<typeof Header>

export const LandmarkDefault: Story = {}

export const HeroHeader: Story = {
  args: {
    children: headerChildren(),
    headerBackground: <Img src="https://picsum.photos/2000/1000" alt="" />,
    styles: { color: 'red' },
    classNames: 'header-class',
    'data-styles': 'blue',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const header = canvas.getByRole('banner')
    expect(header).toBeInTheDocument()
    const title = canvas.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/header title/i)
  },
} as Story
