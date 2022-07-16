import React from 'react'
import Button from './button'

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Elements/Buttons',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (<Button { ...args } />)

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Default Button',
  onClick: () => console.log('Clicked Default Button')
}
export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Default Button',
  disabled: true,
  onClick: () => console.log('Clicked Default Button')
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  children: 'Click Me',
  onClick: () => alert('You Clicked Me?')
}
