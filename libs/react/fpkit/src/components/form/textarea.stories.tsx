import React from 'react'
// import '@shawnsandy/first-paint/dist/css/components/textarea.min.css'

import { StoryObj, Meta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Textarea } from './textarea'
export default {
  title: 'FP.React Components/Form/Inputs',
  component: Textarea,
  argTypes: {
    children: { control: 'text' },
    // type: {
    //   control: "select",
    //   options: ["ComponentName", "submit", "reset"]
    // },
    // onPointerDown: { action: 'down' }
    onChange: { action: 'change' },
    onBlur: { action: 'blur' },
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component: 'Component description',
      },
    },
  },
} as Meta<typeof Textarea>

const Template: StoryObj<typeof Textarea> = (args) => <Textarea {...args} />
/**
 *
 */
export const TextareaInput = Template.bind({})
TextareaInput.args = {
  rows: 8,
}

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas? Nam natus fuga nostrum necessitatibus magnam vel deleniti autem! Expedita deserunt eum, quae officiis totam quo facere est minus consequatur'

TextareaInput.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole('textbox')
  expect(ComponentName).toBeInTheDocument()
  expect(ComponentName).toHaveAttribute('rows')
  userEvent.type(ComponentName, text, { delay: 10 })
  expect(ComponentName).toHaveValue(text)
}
