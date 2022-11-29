import React from 'react'
import '@shawnsandy/first-paint/dist/css/components/content.min.css'
import '@shawnsandy/first-paint/dist/css/components/list.min.css'
import '@shawnsandy/first-paint/dist/css/libs/fp-core.min.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import FP from './fp'
export default {
  title: 'FP.React Components/Elements',
  component: FP,
  argTypes: {
    children: { control: 'text' },
    type: {
      control: 'select',
      options: ['FP', 'submit', 'reset'],
    }
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: 'FP Component - polymorphic react component',
      }
    },
  },
} as ComponentMeta<typeof FP>

const Template: ComponentStory<typeof FP> = (args) => (
  <FP {...args} data-testid="fp-kit">
    {args.children}
  </FP>
)

export const Default = Template.bind({})
Default.args = {
  children: 'FP Kit',
  as: 'div',
  styles: {
    backgroundColor: 'whitesmoke',
    width: '80vw',
    display: 'flex',
    padding: '1rem',
  },
}

Default.play = async ({ args, canvasElement }) => {
  const { getByText } = within(canvasElement)
  const component = getByText(/fp kit/i)
  expect(component).toBeInTheDocument()
  expect(component).toHaveAttribute('style')
}

export const Paragraphs = Template.bind({})
Paragraphs.args = {
  as: 'p',
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus, exercitationem aut deleniti eaque dolore eligendi quia repellat? Earum perferendis aperiam officia adipisci quos enim voluptas asperiores possimus necessitatibus harum.'
}

Paragraphs.play = async ({ args, canvasElement }) => {
  const { getByText, getByTestId } = within(canvasElement)
  const component = getByTestId('fp-kit')
  expect(component).toBeInTheDocument()
  expect(component).toHaveAttribute('style')
}

export const Links = Template.bind({})
Links.args = {
  as: 'a',
  href: 'https://shawnsandy.com',
  children: 'Shawn Sandy',
}

Links.play = async ({ args, canvasElement }) => {
  const { getByText, getByTestId } = within(canvasElement)
  const component = getByTestId('fp-kit')
  expect(component).toBeInTheDocument()
  //  expect(component).toHaveAttribute("style");
}

export const HorizontalRule = Template.bind({})
HorizontalRule.args = {
  as: 'div',
  children: <hr />,
  styles: {
    minWidth: '50vw'
  }
}

export const List = Template.bind({})
List.args = {
  as: 'ul',
  children: (
    <>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </>
  ),
}
List.play = async ({ args, canvasElement }) => {
  const { getByRole, getByTestId } = within(canvasElement)
  const component = getByTestId('fp-kit')
  expect(component).toBeInTheDocument()
}

export const ListUnstyled = Template.bind({})
ListUnstyled.args = {
  as: 'ul',
  'data-fp-list': 'unstyled',
  children: (
    <>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </>
  ),
  styles: {
    '--listNone': 'var(--yes)'
  }
}

export const ListInline = Template.bind({})
ListInline.args = {
  as: 'ul',
  'data-fp-list': 'unstyled inline',
  children: (
    <>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </>

  )
}
