import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import PageHeader, { HeaderVariants } from './page-header'

const meta: Meta<typeof PageHeader> = {
  title: 'FP.React Patterns/PageHeader',
  component: PageHeader,
  args: {
    headerTitle: 'Page Header',
    children: 'Place your cool elevator pitch here...',
  },
} as Meta

export default meta
type Story = StoryObj<typeof PageHeader>

export const PageHeaderComponent: Story = {
  args: {},
  name: 'Page Header',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    //expect(canvas).toBeInTheDocument()
  },
}

export const Cover: Story = {
  args: {
    ...PageHeaderComponent.args,
    variant: HeaderVariants.Cover,
  },
  name: 'Cover Style',
} as Story

export const Banner: Story = {
  args: {
    ...PageHeaderComponent.args,
    variant: HeaderVariants.Banner,
  },
} as Story
