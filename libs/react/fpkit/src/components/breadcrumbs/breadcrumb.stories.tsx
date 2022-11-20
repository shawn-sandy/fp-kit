import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Breadcrumb, Crumb } from './breadcrumb'
export default {
  title: 'FPKIT Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { Crumb },
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
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    {args.children}
  </Breadcrumb>
)

export const DefaultBreadCrumb = Template.bind({})
DefaultBreadCrumb.args = {
  children: (
    <>
    <Crumb>Home</Crumb>
    <Crumb>Library</Crumb>
    <Crumb>Data</Crumb>
    </>
  )
}

DefaultBreadCrumb.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const BreadCrumb = getByRole('navigation')
  expect(BreadCrumb).toBeInTheDocument()
}

// export const ComponentNameInteractions = Template.bind({})

// ComponentNameInteractions.args = {
//   children: "ComponentName Test",
//   // type: "ComponentName",
//   onPointerDown: () => {
//     // clicked = true
//   }
// }
