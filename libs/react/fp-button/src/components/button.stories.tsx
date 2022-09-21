import React from 'react'

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Button from './button'

export default {
  title: 'Elements/Buttons',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    disabled: { control: 'boolean', defaultValue: null },
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
 * Create a pill styled button
 * set the --btn-radius to 99rem
 */
 export const PillStyle = Template.bind({})
 PillStyle.args = {
   children: 'Pill Button',
   styles: { '--btn-radius': "99rem" },
   onPointerDown: () => alert('Clicked Pill')
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

export const ButtonTest = Template.bind({})
ButtonTest.args = {
  children: 'Button Test',
  type: 'button',
  onPointerDown: () => console.log('Clicked Default Button')
}

ButtonTest.play = async ({ canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const button = getByRole('button')
  userEvent.click(button)
  expect(button).toHaveTextContent('Button Test')
  expect(button).toHaveAccessibleName('Button Test')
  expect(button).toHaveAttribute('type', 'button')
  // await userEvent.type(button, 'Hello World')
  // await expect(button).toHaveTextContent('Hello World')
}

