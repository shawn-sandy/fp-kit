import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Img from './img'

const meta: Meta<typeof Img> = {
  title: 'FP.REACT Components/Img',
  component: Img,
  args: {
    src: '//',
  },
} as Story

export default meta
type Story = StoryObj<typeof Img>

export const ImgComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('img')).toBeInTheDocument()
  },
}
