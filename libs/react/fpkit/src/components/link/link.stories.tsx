import { StoryObj, Meta } from '@storybook/react'

import { within, userEvent, screen } from '@storybook/testing-library'

import { expect } from '@storybook/jest'

import Link from './link'
import '../../styles/link/link.css'

const meta: Meta<typeof Link> = {
  title: 'FP.React Components/Links',
  component: Link,
  args: {
    // @ts-ignore
    href: '/',
    children: 'Link',
  },
} as Meta

export default meta
type Story = StoryObj<typeof Link>

export const LinkComponent: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Link')
  },
}

export const ExternalLink: Story = {
  args: {
    // @ts-ignore
    href: 'https://www.google.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    prefetch: true,
    children: 'Google',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Google')
    expect(link).toHaveAttribute('href', 'https://www.google.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer prefetch')
  },
}

export const ButtonLink: Story = {
  args: {
    ...LinkComponent.args,
    children: <b>Button Link</b>,
  },
} as Story

export const ButtonPill: Story = {
  args: {
    ...LinkComponent.args,
    children: <i>Button Link</i>,
  },
} as Story

export const ButtonRounded: Story = {
  args: {
    ...ButtonLink.args,
    styles: {
      '--link-radius': 'initial',
    },
  },
} as Story
