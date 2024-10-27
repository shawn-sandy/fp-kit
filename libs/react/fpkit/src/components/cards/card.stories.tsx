import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Card from './card'
// import './card.scss'

const content =
  'Enim aliquip excepteur veniam esse culpa. Et exercitation incididunt occaecat incididunt proident consectetur. Voluptate elit reprehenderit nulla reprehenderit excepteur tempor adipisicing officia eiusmod est id aute. Nisi do et nulla fugiat enim id pariatur ex. Culpa aliquip excepteur velit fugiat qui magna deserunt adipisicing dolore quis. Esse proident qui consectetur Lorem id fugiat elit amet proident enim deserunt dolore sit.'

const meta: Meta<typeof Card> = {
  title: 'FP.REACT Components/Card',
  component: Card,
  args: {
    children: <p>{content}</p>,
  },
} as Story

export default meta
type Story = StoryObj<typeof Card>

export const CardComponent: Story = {
  args: {},
}

export const Multiple: Story = {
  args: {
    styles: {
      '--theme': 'warm',
    },
  },
  render: (args) => (
    <>
      <Card {...args}>
        <p>
          Proident et amet aliqua excepteur sunt qui deserunt commodo tempor
          esse. Et aliqua nulla ea amet nisi consequat id adipisicing culpa
          ipsum minim voluptate est Lorem. Amet qui laboris incididunt commodo
          culpa aliqua veniam.
        </p>
      </Card>
      <Card>
        <p>
          Proident et amet aliqua excepteur sunt qui deserunt commodo tempor
          esse. Et aliqua nulla ea amet nisi consequat id adipisicing culpa
          ipsum minim voluptate est Lorem. Amet qui laboris incididunt commodo
          culpa aliqua veniam.
        </p>
      </Card>
      <Card>
        <p>
          Proident et amet aliqua excepteur sunt qui deserunt commodo tempor
          esse. Et aliqua nulla ea amet nisi consequat id adipisicing culpa
          ipsum minim voluptate est Lorem. Amet qui laboris incididunt commodo
          culpa aliqua veniam.
        </p>
      </Card>
    </>
  ),
} as Story

export const CardWithTitle: Story = {
  args: {},
  render: (args) => (
    <Card {...args}>
      <Card.Title>Card Title</Card.Title>
      <Card.Content>
        <p>
          This card demonstrates the usage of the CardTitle component. It shows
          how a title can be added to a card for better organization and visual
          hierarchy.
        </p>
      </Card.Content>
    </Card>
  ),
} as Story

export const FlexibleContent: Story = {
  args: {
    styles: {
      // '--card-bg': '#f0f0f0',
    },
  },
  render: (args) => (
    <div data-flex="cols-4">
      <Card {...args}>
        <Card.Title>Card Title</Card.Title>
        <Card.Content>
          <p>
            This card demonstrates the usage of the CardTitle component. It
            shows how a title can be added to a card for better organization and
            visual hierarchy.
          </p>
        </Card.Content>
        <Card.Footer>
          <p>Footer Content</p>
        </Card.Footer>
      </Card>
      <Card {...args}>
        <Card.Title>Second Card Title</Card.Title>
        <Card.Content>
          <p>
            This card demonstrates the usage of the CardTitle component. It
            shows how a title can be added to a card for better organization and
            visual hierarchy.
          </p>
          <p>
            This card demonstrates the usage of the CardTitle component. It
            shows how a title can be added to a card for better organization and
            visual hierarchy.
          </p>
        </Card.Content>
        <Card.Footer>
          <p>Footer Content</p>
        </Card.Footer>
      </Card>
      <Card {...args}>
        <img src="https://picsum.photos/200" alt="Random Image" />
        <Card.Title>Second Card Title</Card.Title>
        <Card.Content>
          <p>
            This card demonstrates the usage of the CardTitle component. It
            shows how a title can be added to a card for better organization and
            visual hierarchy.
          </p>
        </Card.Content>
        <Card.Footer>
          <p>Footer Content</p>
        </Card.Footer>
      </Card>
      <Card {...args}>
        <img src="https://picsum.photos/200" alt="Random Image" />
        <Card.Title>Second Card Title</Card.Title>
        <Card.Content>
          <p>
            This card demonstrates the usage of the CardTitle component. It
            shows how a title can be added to a card for better organization and
            visual hierarchy.
          </p>
        </Card.Content>
        <Card.Footer>
          <p>Footer Content</p>
        </Card.Footer>
      </Card>
    </div>
  ),
} as Story
