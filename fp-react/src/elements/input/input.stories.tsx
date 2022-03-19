import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './input'
import './input.scss'

export default {
  title: 'Elements/Input/Examples',
  component: Input,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof Input>


export const BasicInput: ComponentStory<typeof Input> = () => (
  <div style={ { width: 'min(100vw, 50vw)'}}>
    <Input type="text"/>
  </div>
)
