import React from 'react'
import Button from './button'

import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: 'Elements/Buttons',
  component: Button,
  parameters: {
    // status: {
    //   type: 'beta',
    // },
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (<Button { ...args } />)

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Default Button',
  onClick: () => console.log('Clicked Default Button')
}
