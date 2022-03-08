import React from 'react'
import { Label } from './checkbox'

export default {
  title: 'Elements/Checkbox',
  component: Label,
  parameters: {
    // layout: 'padded',
    status: {
      type: 'alpha',
    },
  }
}

const LabelTemplate = (args) => <Label { ...args } />

export const Labels = LabelTemplate.bind({})

Labels.args = {
  children: 'Label Element',
  name: 'label'
}
