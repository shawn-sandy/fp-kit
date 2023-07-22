import React from 'react'
// import '@shawnsandy/first-paint/dist/css/components/cards.min.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Card } from './card'
export default {
  title: 'FP.React Components/Cards',
  component: Card,
  argTypes: {
    children: { control: 'text' },
    type: {
      control: 'select',
      options: ['Card', 'submit', 'reset'],
    },
    onPointerDown: { action: 'down' },
    styles: { control: 'object' },
  },
  parameters: {
    badges: [BADGE.BETA],
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} data-testid="cards">{args.children}</Card>
)

const content = () => (
  <>
    <h3>Card Title</h3>
    <p>
      Cupidatat consequat enim est et ad laboris pariatur occaecat duis esse
      culpa. Et reprehenderit do in Lorem do magna excepteur amet tempor laborum
      nisi voluptate consectetur. Qui nisi nisi cupidatat anim velit fugiat esse
      in.
    </p>
    <div role="footer">
      <a href="#">Read More</a>
    </div>
  </>
)

export const DefaultCard = Template.bind({})
DefaultCard.args = {
  children: content()
}

DefaultCard.play = async ({ args, canvasElement }) => {
  const { getByTestId } = within(canvasElement)
  const elm = within(canvasElement).getByTestId('cards')
  expect(elm).toBeInTheDocument()
}
