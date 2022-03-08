import React from 'react'
import { Label } from './checkbox'
import "./checkbox.scss"

import { InputField } from './checkbox.stories'

export default {
  title: 'Elements/Checkbox/Component',
  component: Label,
  parameters: {
    // layout: 'padded',
  }
}

const Template = (args) => <Label { ...args } >
  <InputField id={ args.name } /> { args.children }
</Label>

export const CheckboxComponent = Template.bind({})

CheckboxComponent.args = {
  name: 'checkbox',
  children: 'Checkbox Label'
}
