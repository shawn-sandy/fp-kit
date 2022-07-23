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
    disabled: { control: 'boolean', defaultValue: false },
    defaultStyles: { control: 'boolean', defaultValue: true },
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (<Button { ...args } />)

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Default Button',
  onPointerDown: () => console.log('Clicked Default Button')
}
export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Default Button',
  disabled: true,
  onPointerDown: () => console.log('Clicked Default Button')
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  children: 'Click Me',
  onPointerDown: () => alert('You Clicked Me?')
}
export const ButtonStyles = Template.bind({})
ButtonStyles.args = {
  children: 'Button Styles',
  styles: { 'color': "white", 'backgroundColor': "black" },
  onPointerDown: () => alert('Clicked Button Styles')
}

/**
 * Create and unStyled button
 * set the defaultStyles to false
 */
export const UnStyled = Template.bind({})
UnStyled.args = {
  children: 'UnStyled Button',
  defaultStyles: false,
  onPointerDown: () => alert('Clicked UnStyled')
}

