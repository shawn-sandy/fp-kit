import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import FPButton from './index'
import FPButton.scss'

export default {
  title: 'Component/FPButton',
  component: FPButton,
  layout: 'padded',
  status: {
    type: 'alpha',
  },
} as ComponentMeta<typeof FPButton>

export const Primary: ComponentStory<typeof FPButton> = () => (
  <FPButton>Example</FPButton>
)
