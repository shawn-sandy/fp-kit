import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Textarea from './textarea'
import "./textarea.scss"

export default {
  title: 'Elements/Textarea/Examples',
  component: Textarea,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof Textarea>


export const Primary: ComponentStory<typeof Textarea> = () => (
  <Textarea>Example</Textarea>
)
