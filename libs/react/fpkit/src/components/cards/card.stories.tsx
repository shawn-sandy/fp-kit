import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Card from './card'
import './card.scss'

const content =
  'Enim aliquip excepteur veniam esse culpa. Et exercitation incididunt occaecat incididunt proident consectetur. Voluptate elit reprehenderit nulla reprehenderit excepteur tempor adipisicing officia eiusmod est id aute. Nisi do et nulla fugiat enim id pariatur ex. Culpa aliquip excepteur velit fugiat qui magna deserunt adipisicing dolore quis. Esse proident qui consectetur Lorem id fugiat elit amet proident enim deserunt dolore sit.'

const meta: Meta<typeof Card> = {
  title: 'FP.REACT Components/Card',
  component: Card,
  args: {
    // @ts-ignore
    children: content,
  },
} as Story

export default meta
type Story = StoryObj<typeof Card>

export const CardComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}

export const Multiple: Story = {
  render: () => (
    <>
      <Card>
        Proident et amet aliqua excepteur sunt qui deserunt commodo tempor esse.
        Et aliqua nulla ea amet nisi consequat id adipisicing culpa ipsum minim
        voluptate est Lorem. Amet qui laboris incididunt commodo culpa aliqua
        veniam.
      </Card>
      <Card>
        Proident et amet aliqua excepteur sunt qui deserunt commodo tempor esse.
        Et aliqua nulla ea amet nisi consequat id adipisicing culpa ipsum minim
        voluptate est Lorem. Amet qui laboris incididunt commodo culpa aliqua
        veniam.
      </Card>
      <Card>
        Proident et amet aliqua excepteur sunt qui deserunt commodo tempor esse.
        Et aliqua nulla ea amet nisi consequat id adipisicing culpa ipsum minim
        voluptate est Lorem. Amet qui laboris incididunt commodo culpa aliqua
        veniam.
      </Card>
    </>
  ),
} as Story
