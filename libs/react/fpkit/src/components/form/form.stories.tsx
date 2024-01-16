import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Form from './form'
import './form.scss'

const meta: Meta<typeof Form> = {
  title: 'FP.REACT Forms/Components',
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
  },
} as Story

export default meta
type Story = StoryObj<typeof Form>

export const FormComponent: Story = {
  args: {
    children: (
      <>
        <Form formAction={() => {}}>
          <Form.Field label="Name" labelFor="name">
            <Form.Input name="name" />
          </Form.Field>
          <Form.Field label="Email" labelFor="email">
            <Form.Input name="email" type="email" />
          </Form.Field>
          <Form.Field label="Message" labelFor="message">
            <Form.Textarea id="message" name="message" />
          </Form.Field>
          <button type="submit">Submit</button>
        </Form>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
} as Story
