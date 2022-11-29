import React from 'react'
import '@shawnsandy/first-paint/dist/css/components/breadcrumb.min.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Breadcrumb } from './breadcrumb'
import { BCItem } from './bc-item'
export default {
  title: 'FP.React Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BCItem },
  argTypes: {},
  parameters: {
    badges: [BADGE.BETA],
  },
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>{args.children}</Breadcrumb>
)

const bcList = () => (
  <>
    <BCItem current="page">Home</BCItem>
    <BCItem>Library</BCItem>
    <BCItem>Data</BCItem>
  </>
)

export const DefaultBreadCrumb = Template.bind({})
DefaultBreadCrumb.args = {
  children: bcList(),
}

DefaultBreadCrumb.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const BreadCrumb = getByRole('navigation')
  expect(BreadCrumb).toBeInTheDocument()
  // expect(BreadCrumb).toHaveAttribute('data-fp-breadcrumb')
  const list = getByRole('listitem', { current: 'page' })
  expect(list).toBeInTheDocument()
}
