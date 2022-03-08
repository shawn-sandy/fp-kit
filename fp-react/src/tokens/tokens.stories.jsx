import React from 'react'
import Tokens from './tokens'

export default {
  title: 'Tokens/Demo',
  component: Tokens
}

const Template = (args) => <Tokens {...args} />

export const Demo = Template.bind({})

Demo.args = {
  children: 'Displays the services date here'
}
