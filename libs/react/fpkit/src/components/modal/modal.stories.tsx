import React from 'react'
import '@shawnsandy/first-paint/dist/css/components/dialog.min.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Modal } from './modal'
export default {
  title: 'FPKIT Components/Modal',
  component: Modal,
  argTypes: {
    children: { control: 'text' },
    type: {
      control: 'select',
      options: ['ComponentName', 'submit', 'reset'],
    },
    onPointerDown: { action: 'down' },
  },
  parameters: {
    badges: [BADGE.BETA],
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>{args.children}</Modal>
)

export const ModalComponent = Template.bind({})
ModalComponent.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta explicabo
      quidem debitis vero cumque deleniti eius, consectetur saepe impedit.
      Dolore ea esse aperiam eius perferendis totam atque qui, quaerat ipsa.
    </p>
  ),
}

ModalComponent.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const buttonOpen = getByRole('button', { name: 'Open' })
  expect(buttonOpen).toBeInTheDocument()
  await userEvent.click(buttonOpen)
  const dialog = getByRole('dialog')
  expect(dialog).toBeInTheDocument()
  const buttonClose = getByRole('button', { name: 'Close' })
  expect(buttonClose).toBeInTheDocument()
  await userEvent.click(buttonClose)
  expect(dialog).not.toBeVisible()
}
