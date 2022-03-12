import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import SampleComponent from './index'

export default {
  title: 'Component/SampleComponent',
  component: SampleComponent,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof SampleComponent>

export const Primary: ComponentStory<typeof SampleComponent> = () => (
  <SampleComponent>Example</SampleComponent>
)
