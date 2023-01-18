import React from 'react'
// import '@shawnsandy/first-paint/dist/css/components/dialog.min.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Modal } from './modal'
export default {
  title: 'FP.React Components/Modal',
  component: Modal,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    badges: [BADGE.BETA],
    docs: {
      description: {
        component:
          'A `modal` component built using the `dialog` as its base component, it allows you too open and close the modal using the `open` and `close` methods.',
      },
    },
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

ModalComponent.parameters = {
  docs: {
    description: {
      story:
        'A default dialog modal with header/footer children for easy customization',
    },
  },
}

ModalComponent.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const buttonOpen = getByRole('button', { name: 'Open Modal' })
  expect(buttonOpen).toBeInTheDocument()
  await userEvent.click(buttonOpen)
  const dialog = getByRole('dialog')
  expect(dialog).toBeVisible(), expect(dialog).toBeInTheDocument()
  const buttonClose = getByRole('button', { name: 'Close' })
  expect(buttonClose).toBeInTheDocument()
  await waitFor(() => {
    userEvent.click(buttonClose), { timeout: 2000 }
  })
  expect(dialog).not.toBeVisible()
}

/**
 * export the dialog component
 */
export const DialogComponent = Template.bind({})
DialogComponent.args = {
  children: (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, omnis.
        Cumque unde pariatur, voluptate dolores perspiciatis ab nisi quod
        reprehenderit deleniti sequi inventore laborum veniam eum, nemo,
        delectus explicabo a!
      </p>
    </div>
  ),
  showOpen: true,
}

DialogComponent.parameters = {
  docs: {
    description: {
      story:
        'A dialog component open on mount with `showOpen` set to true, hides the `close` button and sets the to open using the `show()` method.',
    },
  },
}
