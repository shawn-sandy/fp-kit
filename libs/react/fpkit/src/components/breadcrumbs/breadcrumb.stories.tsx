import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Breadcrumb from './breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'FP.REACT Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component: 'Breadcrumb description here...',
      },
    },
  },
  args: {
    // @ts-ignore
    children: 'Link',
  },
} as Story

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const BreadcrumbComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/link/i)).toBeInTheDocument()
  },
}

export const CustomURL: Story = {
  args: {
    routes: [
      {
        name: 'Products',
        url: '/products',
        path: 'product',
      },
      {
        name: 'Shirts',
        url: '/products/shirts',
        path: 'shirts',
      },
      {
        name: 'Pants',
        url: '/products/pants',
        path: 'pants',
      },
    ],
    currentRoute: '/product/men/shirts/size-22',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const nav = canvas.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  },
} as Story

export const AstroBreadcrumbs: Story = {
  args: {
    ...CustomURL.args,
    currentRoute: '/about',
  },
} as Story
