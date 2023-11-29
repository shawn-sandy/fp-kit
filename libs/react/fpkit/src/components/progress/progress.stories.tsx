import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import '../../styles/progress/progress.css'

import Progress from './progress'

const meta: Meta<typeof Progress> = {
  title: 'FP.React Components/Progress',
  component: Progress,
  args: {},
  decorators: [
    (Story) => (
      <div style={{ minWidth: '500px', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

export default meta
type Story = StoryObj<typeof Progress>

export const ProgressComponent: Story = {
  name: 'Progress Bar',
  args: {
    isBusy: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    //expect(canvas).toBeInTheDocument()
  },
} as Story

export const ProgressIndicator: Story = {
  args: {
    value: 3,
    max: 10,
  },
} as Story

export const RedProgress: Story = {
  args: {
    ...ProgressIndicator.args,
    styles: {
      '--progress-color': 'red',
    },
    value: 7,
  },
} as Story
