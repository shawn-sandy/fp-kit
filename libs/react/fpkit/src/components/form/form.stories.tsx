import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Form from './form'
import './form.scss'

const meta: Meta<typeof Form> = {
  title: 'FP.REACT Forms/Examples',
  component: Form,
  parameters: {
    docs: {
      description: {
        component: 'Form description here...',
      },
    },
  },
  args: {
    children: 'Link',
    name: 'my-form',
  },
} as Story

export default meta
type Story = StoryObj<typeof Form>

export const FormComponent: Story = {
  args: {
    children: (
      <>
        <Form.Field label="Name" labelFor="name" id="name-field">
          <Form.Input id="name" name="name" />
        </Form.Field>
        <Form.Field label="Email" labelFor="email">
          <Form.Input id="email" name="email" type="email" />
        </Form.Field>
        <Form.Field label="Message" labelFor="message">
          <Form.Textarea id="message" name="message" />
        </Form.Field>
        <button type="submit">Submit Form</button>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const form = canvas.getByRole('form')
    await expect(form).toBeInTheDocument()
  },
} as Story
