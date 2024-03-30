import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Figure from './figure'

const meta: Meta<typeof Figure> = {
  title: 'FP.REACT Components/Figure',
  component: Figure,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: 'Figure description here...',
      },
    },
  },
  args: {},
} as Story

export default meta
type Story = StoryObj<typeof Figure>

export const FigureComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText(/caption for the image here.../i),
    ).toBeInTheDocument()
    expect(canvas.getByRole('img')).toBeInTheDocument()
    expect(canvas.getByRole('figure')).toBeInTheDocument()
  },
}
