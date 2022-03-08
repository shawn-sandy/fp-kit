import React from 'react'
import Button from './button'
import './button.scss'

export default {
  title: 'Elements/Buttons',
  component: Button,
  parameters: {
    status: {
      type: 'beta',
    },
  }
}

const Template = (args) => <Button { ...args } />

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button',
  click: () => console.log('Clicked Default Button')
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
  click: () => console.log('Clicked Disabled Button')
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
export const RedStyle = Template.bind({})
RedStyle.args = {
  children: 'Red Custom Style',
  styles: { '--btn-bg': 'red', '--btn-color': 'white' },
  click: () => console.log('Clicked red Button')
}

export const RedDisabled = Template.bind({})
RedDisabled.args = {
  disabled: true,
  children: 'Red Disabled',
  styles: { '--btn-bg': 'red', '--btn-color': 'white' },
  click: () => console.log('Clicked Disabled Button')
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  children: 'Large Button',
  styles: { '--btn-fs': 'var(--btn-lg)' },
  click: () => console.log('Large Button')
}
